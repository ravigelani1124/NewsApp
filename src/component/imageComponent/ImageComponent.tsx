import React, { useState } from "react";
import { View, StyleSheet, Image, ActivityIndicator } from "react-native";
import { LocalImages } from "../../assets/images";
import ColorUtils from "../../utils/color";

interface ImageProps {
  url: string;
}

const ImageComponent: React.FC<ImageProps> = (props) => {
  const { url } = props;

  const [imageLoader, setImageLoader] = useState<boolean>();

  return (
    <View style={styles.viewStyle}>
      <Image
        {...props}
        onLoadStart={() => {
          setImageLoader(true);
        }}
        onLoadEnd={() => {
          setImageLoader(false);
        }}
        source={url ? { uri: url } : LocalImages.placeHolder}
      />

      {imageLoader ? (
        <ActivityIndicator
          style={styles.indicatorStyle}
          size={"small"}
          color={ColorUtils.black}
        ></ActivityIndicator>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  indicatorStyle: {
    position: "absolute",
  },
});

export default ImageComponent;
