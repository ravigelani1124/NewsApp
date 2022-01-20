import { StyleSheet } from "react-native";
import ColorUtils from "../../utils/color";

const stylesPost = StyleSheet.create({
  pContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 15,
    flexDirection: "row",
    backgroundColor: ColorUtils.white,
    borderRadius: 10,
  },
  tTitle: {
    fontSize: 16,
    marginRight: 10,
    color: ColorUtils.black,
  },
  tDate: {
    fontSize: 12,
    marginTop: 2,
    color: ColorUtils.gray,
  },
  tDesc: {
    fontSize: 14,
    marginVertical: 5,
    color: ColorUtils.gray,
    textAlign: "left",
  },
  imageuser: {
    width: 70,
    marginStart: 12,
    marginRight: 12,
    borderRadius: 5,
    borderColor: ColorUtils.white,
    height: 70,
  },
  tContainer: {
    flex: 1,
  },
});

export default stylesPost;
