import { StyleSheet } from "react-native";
import ColorUtils from "../../utils/color";

const stylesCategory = StyleSheet.create({
  pContainer: {
    marginStart: 8,
    marginEnd: 8,
    paddingHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 5,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: ColorUtils.white,
    borderRadius: 30,
  },
  pSelectedContainer: {
    marginStart: 8,
    marginEnd: 8,
    paddingHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 5,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: ColorUtils.black,
    borderRadius: 30,
  },
  tTitle: {
    fontSize: 14,
    marginHorizontal: 5,
    paddingVertical: 5,
    fontWeight: "500",
    color: ColorUtils.black,
  },
  tSelectedTitle: {
    fontSize: 14,
    marginHorizontal: 5,
    paddingVertical: 5,
    fontWeight: "500",
    color: ColorUtils.white,
  },
});

export default stylesCategory;
