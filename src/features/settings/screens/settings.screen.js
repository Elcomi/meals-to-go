import React, { useContext, useState } from "react";
import { List, Divider, Avatar } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../utils/safeArea";
import { Text } from "../../../components/typography/text";

const AvatarContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin: ${props => props.theme.space[3]};
`;

const AddImageAvatar = styled(Avatar.Icon).attrs({
  backgroundColor: "tomato"
})`
  position: absolute;
  top: 125px;
  left: 215px;
`;
export const SettingsScreen = ({ navigation }) => {
  const { Logout, user } = useContext(AuthenticationContext);
  const [image, setImage] = useState(null);

  // get item
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(`@Camera-${user.uid}`);
      if (value !== null) {
        setImage(value);
      }
    } catch (e) {
      console.log(e, "getData");
    }
  };

  useFocusEffect(() => {
    getData(user);
  });

  return (
    <SafeArea>
      <TouchableOpacity
        style={{ zIndex: 999 }}
        onPress={() => navigation.navigate("Camera")}>
        <AddImageAvatar size={50} icon='camera-plus' />
      </TouchableOpacity>
      <AvatarContainer>
        {image ? (
          <Avatar.Image size={150} source={{ uri: image }} />
        ) : (
          <Avatar.Icon
            size={150}
            icon='human-greeting-variant'
            backgroundColor='tomato'
          />
        )}

        <Text style={{ marginTop: 10 }}> {user && user.email} </Text>
      </AvatarContainer>

      <List.Item
        title='Favourites'
        description='View your favourites...'
        left={props => <List.Icon {...props} icon='cards-heart' />}
        onPress={() => navigation.navigate("Favourites")}
      />
      <Divider />

      <List.Item
        title='Log out'
        left={props => <List.Icon {...props} icon='logout' />}
        onPress={Logout}
      />
    </SafeArea>
  );
};
