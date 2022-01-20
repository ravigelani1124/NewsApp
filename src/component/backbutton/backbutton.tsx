import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LocalImages } from "../../assets/images";

interface BackProps {
  onBackPress?: () => void;
}

const BackButton: React.FC<BackProps> = (props) => {
  const { onBackPress } = props;

  return (
    <View style={styles.headerStyle}>
      <TouchableOpacity
        style={styles.imageTouch}
        activeOpacity={0.5}
        onPress={onBackPress}
      >
        <Image
          source={LocalImages.back}
          style={styles.imgSize}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    height: 50,
    marginTop: 10,
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  imageTouch: {
    height: 35,
    width: 50,
    justifyContent: "center",
  },
  imgSize: {
    height: 25,
    width: 32,
  },
});

export default BackButton;
