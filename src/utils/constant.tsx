import moment from "moment";
import { LocalImages } from "../assets/images";

export const CategoryList = [
  { key: "business", title: "Business" },
  { key: "entertainment", title: "Entertainment" },
  { key: "general", title: "General" },
  { key: "health", title: "Health" },
  { key: "science", title: "Science" },
  { key: "sports", title: "Sports" },
  { key: "technology", title: "Technology" },
];

export const CATEGORY = {
  defaultCategory: "business",
};

export const Strings = {
  open: "Open Web",
};

export const AUTH_DETAILS = {
  BASE_URL: "https://newsapi.org/v2/top-headlines",
  KEY: "01db0eaa39854444a8c2e27485263775",
};
export const API_METHOD = {
  POST: "POST",
  GET: "GET",
};

export const DATE_FORMAT = "DD MMM, YYYY";

export const getFormatedDate = (date: string) => {
  return moment(date).format(DATE_FORMAT);
};
