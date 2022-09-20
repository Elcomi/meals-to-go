import React, { useState, useContext } from "react";
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

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { Login, error, isLoading } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label='Email'
          autoCapitalize='none'
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

        {isLoading ? (
          <ActivityIndicator animating={true} color={Colors.blue300} />
        ) : (
          <AuthButton
            icon='login'
            mode='contained'
            onPress={() => Login(email, password)}>
            LogIn
          </AuthButton>
        )}

        {error && (
          <ErrorContainer>
            <Text variant='error'> {error} </Text>
          </ErrorContainer>
        )}
        <Caption>
          You do not have an account ?
          <Text
            variant='error'
            onPress={() => {
              navigation.navigate("Register");
            }}>
            {" "}
            Create an account
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
