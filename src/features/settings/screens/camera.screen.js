import React, { useRef, useContext, useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { View } from "react-native";
import { Text } from "../../../components/typography/text";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const FlipContainer = styled.View`
  flex: 1;
  background: transparent;
  flex-direction: row;
  margin: 20px;
`;
const Flip = styled.TouchableOpacity`
  flex: 0.1;
  background: ${props => props.theme.colors.bg.primary};
  border-radius: 25px;
  padding: 5px;
  align-self: flex-end;
  align-items: center;
`;
const SnapContainer = styled.View`
  flex: 1;
  width: 100%;
  fle-direction: row;
  justify-content: center;
  position: absolute;
  bottom: 0;
`;
const Snap = styled.TouchableOpacity`
  flex: 0;
  background: ${props => props.theme.colors.bg.primary};
  border-radius: 50px;
  padding: 15px;
  padding-horizontal: 20px;
  align-self: center;
  margin: 20px;
`;

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.front);
  const { user } = useContext(AuthenticationContext);

  const cameraRef = useRef();

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const options = { quality: 1, base64: true };
        const image = await cameraRef.current.takePictureAsync(options);
        AsyncStorage.setItem(`@Camera-${user.uid}`, image.uri);
        navigation.goBack();
      } catch (error) {
        console.log(error, "ERROR");
      }
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <ProfileCamera ref={camera => (cameraRef.current = camera)} type={type}>
      <SnapContainer>
        <Snap onPress={takePicture}>
          <Text> SNAP </Text>
        </Snap>
      </SnapContainer>
      <FlipContainer>
        <Flip
          onPress={() => {
            setType(
              type === CameraType.front ? CameraType.back : CameraType.front
            );
          }}>
          <Text> Flip </Text>
        </Flip>
      </FlipContainer>
    </ProfileCamera>
  );
};
