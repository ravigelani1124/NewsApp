import React, { useState } from "react";
import { FlatList, ActivityIndicator, View, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import apiActionCreator from "../../redux/actions/ApiActionCreator";
import stylePostScreen from "./styles";
import { useNavigation } from "@react-navigation/native";
import ItemPost from "../../component/newspost";
import ColorUtils from "../../utils/color";
import Routes from "../../navigation/routes";
import { CATEGORY } from "../../utils/constant";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoryList } from "../../utils/constant";
import ItemCategory from "../../component/newscategory";
import Search from "react-native-search-box";

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState(CATEGORY.defaultCategory);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.apiReducer.data.articles);
  const loading = useSelector((state) => state.apiReducer.loading);

  console.log(data);
  useEffect(() => {
    dispatch(apiActionCreator("", category));
  }, [category]);

  const handleNavigaiton = (item) => {
    navigation.navigate(Routes.PostDetails, { postData: item });
  };

  const renderPostItem = (props: any) => {
    return <ItemPost {...props} onPress={handleNavigaiton} />;
  };

  const handleCategory = (item: any) => {
    setCategory(item.key);
  };

  const renderCategoryItem = (props) => {
    return (
      <ItemCategory {...props} selected={category} onPress={handleCategory} />
    );
  };

  return (
    <SafeAreaView style={stylePostScreen.rootView}>
      <Search
        onChangeText={(text) => {
          console.log(text);
          if (text.length <= 0) {
            setCategory(CATEGORY.defaultCategory);
          }
        }}
        onSearch={(text: string) => {
          dispatch(apiActionCreator(text, category));
        }}
      />
      <View style={stylePostScreen.catView}>
        <FlatList
          data={CategoryList}
          bounces={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
          renderItem={renderCategoryItem}
        />
      </View>
      <View style={stylePostScreen.dashContainer}>
        {loading ? (
          <ActivityIndicator
            style={stylePostScreen.loaderStyle}
            size="large"
            color={ColorUtils.black}
          />
        ) : (
          <FlatList
            data={data}
            bounces={false}
            overScrollMode="never"
            showsVerticalScrollIndicator={false}
            renderItem={renderPostItem}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
