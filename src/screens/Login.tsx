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

      <View style={styles.container}>
        <Logo />
        <View style={styles.form}>
          <View style={{ marginBottom: 17 }}>
            <Paragraph>Welcome back, athlete!</Paragraph>
          </View>
          <TextInput
            style={styles.input}
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
      </View>

      <View style={styles.row}>
        <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
          <Text style={styles.label}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  rowContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  row: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.link,
  },
  container: {
    marginTop: 140,
    width: "100%",
    display: "flex",
  },
  input: {
    display: "flex",
    marginBottom: 17,
  },
  form: {
    marginTop: 79,
    width: 328,
    margin: "auto",
    display: "flex",
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
