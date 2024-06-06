import React, { memo, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { emailValidator, getToken, passwordValidator } from "../core/utils";
import { Navigation, LoginRequest, AuthenticationResponse } from "../types";
import { useAuth } from "../context/AuthContext";
import Paragraph from "../components/Paragraph";
import { ScrollView } from "react-native-gesture-handler";

type Props = {
  navigation: Navigation;
};

const Login = ({ navigation }: Props) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const { onLogin } = useAuth();

  const _onLoginPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    const result = await onLogin(email.value, password.value);
    if (result && result.error) {
      alert(result.msg);
    }

    navigation.navigate("Dashboard");
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate("Home")} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Logo />

        <View style={styles.form}>
          <View style={{ marginBottom: 17 }}>
            <Paragraph>Welcome back, athlete!</Paragraph>
          </View>
          <TextInput
            style={styles.input}
            placeholderTextColor={theme.colors.primary}
            placeholder="Email"
            autoComplete="email"
            returnKeyType="next"
            value={email.value}
            onChangeText={(text) => setEmail({ value: text, error: "" })}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            textContentType="emailAddress"
            keyboardType="email-address"
          />

          <TextInput
            placeholderTextColor={theme.colors.primary}
            style={styles.input}
            placeholder="Password"
            returnKeyType="done"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: "" })}
            error={!!password.error}
            errorText={password.error}
            secureTextEntry
          />

          <Button
            mode="contained"
            onPress={_onLoginPressed}
            style={styles.submitButton}
          >
            Login
          </Button>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <View style={styles.footer}>
              <View style={styles.footerElement}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ForgotPassword")}
                >
                  <Text style={styles.link}>Forgot your password?</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.footerElement}>
                <View style={{ flexDirection: "row", marginTop: 17 }}>
                  <Text style={styles.label}>Don’t have an account? </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Register")}
                  >
                    <Text style={styles.link}>Sign up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  rowContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 24,
  },
  row: {
    width: "100%",
    height: 104,
    flexDirection: "row",
    justifyContent: "center",
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "500",
    color: theme.colors.link,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  input: {
    marginBottom: 17,
  },
  form: {
    width: 328,
    marginTop: 79,
    margin: "auto",
  },
  footer: {
    flexDirection: "column",
    width: "100%",
    alignSelf: "flex-end",
    marginBottom: 24,
  },
  footerElement: {
    alignSelf: "center",
  },
  submitButton: {
    width: 143,
    height: 44,
    alignSelf: "flex-end",
    borderRadius: 6,
    backgroundColor: theme.colors.primary,
  },
});

export default memo(Login);
