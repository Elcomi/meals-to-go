import React from "react";
import Lottie from "lottie-react-native";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AnimationWrapper
} from "../components/authentication.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <Lottie
          source={require("../../../utils/animation/watermealon.json")}
          autoPlay
          resizeMode='cover'
          loop
        />
      </AnimationWrapper>

      <AccountContainer>
        <AuthButton
          icon='login'
          mode='contained'
          onPress={() => navigation.navigate("LogIn")}>
          LogIn
        </AuthButton>
        <AuthButton
          icon='email-edit-outline'
          mode='contained'
          onPress={() => navigation.navigate("Register")}>
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
