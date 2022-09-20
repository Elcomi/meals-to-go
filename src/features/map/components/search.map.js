import { useState, useContext } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { locationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: ${props => props.theme.space[4]};
  width: 100%;
`;

export const Search = () => {
  const { search, keyword } = useContext(locationContext);

  const [searchkeyword, setSearchkeyword] = useState(keyword);

  // useEffect(() => {
  //   search(searchkeyword);
  // }, [searchkeyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder='Search for location'
        value={searchkeyword}
        onSubmitEditing={() => {
          search(searchkeyword);
        }}
        icon='map'
        // onIconPress={() => {
        //   search(searchkeyword);
        // }}
        onChangeText={text => {
          setSearchkeyword(text);
        }}
      />
    </SearchContainer>
  );
};
