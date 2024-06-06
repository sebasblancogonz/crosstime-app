import React, { memo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as SecureStore from "expo-secure-store";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { Navigation, RegisterRequest, AuthenticationResponse } from "../types";
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from "../core/utils";
import Paragraph from "../components/Paragraph";
import { ScrollView } from "react-native-gesture-handler";

type Props = {
  navigation: Navigation;
};

const Register = ({ navigation }: Props) => {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const _storeData = async (key: string, value: string) => {
    await SecureStore.setItemAsync(key, value);
  };

  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    const registerRequest: RegisterRequest = {
      username: name.value,
      email: email.value,
      password: password.value,
      role: "USER",
    };

    fetch("http://192.168.100.3:8080/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerRequest),
    })
      .then((response) => response.json())
      .then((data: AuthenticationResponse) => {
        _storeData("accessToken", data.accessToken);
        _storeData("refreshToken", data.refreshToken);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    navigation.navigate("Dashboard");
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate("Home")} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Logo />

        <View style={styles.form}>
          <View style={{ marginBottom: 17 }}>
            <Paragraph>Join us, push your limits</Paragraph>
          </View>
          <TextInput
            style={styles.input}
            placeholderTextColor={theme.colors.primary}
            placeholder="Username"
            returnKeyType="next"
            value={name.value}
            onChangeText={(text) => setName({ value: text, error: "" })}
            error={!!name.error}
            errorText={name.error}
          />

          <TextInput
            style={styles.input}
            placeholderTextColor={theme.colors.primary}
            placeholder="Email"
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
            placeholderTextColor={theme.colors.primary}
            placeholder="Password"
            returnKeyType="done"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: "" })}
            error={!!password.error}
            errorText={password.error}
            secureTextEntry
          />

          <TextInput
            style={styles.input}
            placeholderTextColor={theme.colors.primary}
            placeholder="Repeat password"
            returnKeyType="done"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: "" })}
            error={!!password.error}
            errorText={password.error}
            secureTextEntry
          />

          <Button
            mode="contained"
            onPress={_onSignUpPressed}
            style={styles.submitButton}
          >
            Sign Up
          </Button>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <View style={styles.footer}>
              <View style={styles.footerElement}>
                <View style={{ flexDirection: "row", marginTop: 17 }}>
                  <Text style={styles.label}>Already have an account? </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                  >
                    <Text style={styles.link}>Sign in</Text>
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
  label: {
    color: theme.colors.secondary,
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
  logo: {
    marginTop: 140,
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
  link: {
    fontWeight: "500",
    color: theme.colors.link,
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

export default memo(Register);
