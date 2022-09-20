import React, { useState, useContext } from "react";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Caption
} from "../components/authentication.styles";

import { Spacer } from "../../../components/spacer/spacer";
import { Text } from "../../../components/typography/text";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setrepeatedPassword] = useState("");

  const { Register, error, isLoading } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          autoCapitalize='none'
          label='Email'
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Spacer size='large' />

        <AuthInput
          autoCapitalize='none'
          secureTextEntry={true}
          label='Password'
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Spacer size='large' />

        <AuthInput
          label='Repeated Password'
          secureTextEntry={true}
          autoCapitalize='none'
          value={repeatedPassword}
          onChangeText={text => setrepeatedPassword(text)}
        />
        <Spacer size='large' />

        {isLoading ? (
          <ActivityIndicator animating={true} color={Colors.blue300} />
        ) : (
          <AuthButton
            icon='login'
            mode='contained'
            onPress={() => Register(email, password, repeatedPassword)}>
            Register
          </AuthButton>
        )}

        {error && (
          <ErrorContainer>
            <Text variant='error'>{error}</Text>
          </ErrorContainer>
        )}
        <Caption>
          Already have an account?
          <Text
            variant='error'
            onPress={() => {
              navigation.navigate("LogIn");
            }}>
            {" "}
            sign in
          </Text>
        </Caption>
      </AccountContainer>
      <Spacer size='large' />

      <AuthButton mode='contained' onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </AccountBackground>
  );
};
