import { useState, useContext } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { locationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const Search = ({ isFavouriteTriggered, onFavouriteTriggered }) => {
  const { search, keyword } = useContext(locationContext);

  const [searchkeyword, setSearchkeyword] = useState(keyword);

  // useEffect(() => {
  //   search(searchkeyword);
  // }, [searchkeyword]);
  return (
    <SearchContainer>
      <Searchbar
        placeholder='Search for restaurant'
        icon={isFavouriteTriggered ? "heart" : "heart-outline"}
        onIconPress={onFavouriteTriggered}
        value={searchkeyword}
        onSubmitEditing={() => {
          search(searchkeyword);
        }}
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

export default Search;
