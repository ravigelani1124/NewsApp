import React from "react";
import { Pressable, Text } from "react-native";
import stylesCategory from "./styles";

const ItemCategory: React.FC<any> = ({ item, onPress, selected }) => {
  const handleOnPress = () => {
    onPress(item);
  };
  return (
    <Pressable
      style={
        selected === item.key
          ? stylesCategory.pSelectedContainer
          : stylesCategory.pContainer
      }
      onPress={handleOnPress}
    >
      <Text
        style={
          selected === item.key
            ? stylesCategory.tSelectedTitle
            : stylesCategory.tTitle
        }
      >
        {item.title}
      </Text>
    </Pressable>
  );
};

export default ItemCategory;
