import React from "react";
import { Pressable, Text, View } from "react-native";
import stylesPost from "./styles";
import { getFormatedDate } from "../../utils/constant";
import ImageComponent from "../imageComponent/ImageComponent";

const ItemPost: React.FC<any> = ({ item, onPress }) => {
  const handleOnPress = () => {
    onPress(item);
  };

  const textLimit = (text: string) => {
    return text.length < 80 ? `${text}` : `${text?.substring(0, 80)}..`;
  };

  return (
    <Pressable style={stylesPost.pContainer} onPress={handleOnPress}>
      <ImageComponent url={item?.urlToImage} style={stylesPost.imageuser} />
      <View style={stylesPost.tContainer}>
        <Text numberOfLines={1} style={stylesPost.tTitle}>
          {item?.title}
        </Text>
        <Text numberOfLines={2} style={stylesPost.tDesc}>
          {textLimit(item?.description ?? "")}
        </Text>
        <Text style={stylesPost.tDate}>
          {getFormatedDate(item?.publishedAt)}
        </Text>
      </View>
    </Pressable>
  );
};

export default ItemPost;
