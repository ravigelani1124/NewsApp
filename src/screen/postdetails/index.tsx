import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  Linking,
  Pressable,
} from "react-native";
import stylesPostDetail from "./styles";
import BackButton from "../../component/backbutton/backbutton";
import { useNavigation } from "@react-navigation/native";
import { getFormatedDate, Strings } from "../../utils/constant";
import ImageComponent from "../../component/imageComponent/ImageComponent";
const PostDetailScreen: React.FC = () => {
  const { params } = useRoute();
  const [postDetails, setPostDetails] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    const { postData } = params;
    if (postData) {
      setPostDetails(postData);
    }
  }, []);

  return (
    <SafeAreaView style={stylesPostDetail.rootContainer}>
      <BackButton
        onBackPress={() => {
          navigation.goBack();
        }}
      />

      <ScrollView style={stylesPostDetail.scrollView}>
        <Text style={stylesPostDetail.txtTitle}>{postDetails?.title}</Text>
        <ImageComponent
          url={postDetails?.urlToImage}
          style={stylesPostDetail.postImage}
        />
        <Text style={stylesPostDetail.txtAuthor}>{postDetails?.author}</Text>
        <Text style={stylesPostDetail.txtAuthor}>
          {getFormatedDate(postDetails?.publishedAt)}
        </Text>

        <Text style={stylesPostDetail.txtDesc}>{postDetails?.description}</Text>
        <Text style={stylesPostDetail.txtDesc}>{postDetails?.content}</Text>
        <Pressable
          onPress={() => {
            Linking.openURL(postDetails?.url);
          }}
        >
          <Text style={stylesPostDetail.btnStyles}>{Strings.open}</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostDetailScreen;
