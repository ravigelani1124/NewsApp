import { StyleSheet } from "react-native";
import ColorUtils from "../../utils/color";

const stylesPostDetail = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 20,
    marginBottom: 20,
  },
  postImage: {
    width: "100%",
    height: 250,
  },
  txtTitle: {
    fontSize: 18,
    color: ColorUtils.black,
    fontWeight: "500",
    textAlign: "left",
    marginBottom: 10,
  },
  txtDesc: {
    fontSize: 16,
    marginVertical: 5,
    color: ColorUtils.gray,
    textAlign: "left",
  },
  txtAuthor: {
    fontSize: 16,
    marginVertical: 5,
    color: ColorUtils.black,
    textAlign: "right",
  },
  btnStyles: {
    width: 160,
    alignSelf: "center",
    marginVertical: 20,
    color: ColorUtils.white,
    backgroundColor: ColorUtils.black,
    textAlign: "center",
    padding: 10,
    fontSize: 16,
  },
});

export default stylesPostDetail;
