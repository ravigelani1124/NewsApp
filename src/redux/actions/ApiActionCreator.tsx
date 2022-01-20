import axios from "axios";
import { API_METHOD, AUTH_DETAILS } from "../../utils/constant";
import { fetchData, fetchSuccess, fetchError } from "./ApiAction";

const apiActionCreator =
  (searchText: string, category: string) => (dispatch: any) => {
    dispatch(fetchData());
    return new Promise(() => {
      let headers = { "X-Api-Key": AUTH_DETAILS.KEY };
      let params;
      if (searchText !== "") {
        params = { q: searchText };
      } else {
        params = { country: "us", category: category };
      }

      let dataReq: any = {
        url: AUTH_DETAILS.BASE_URL,
        headers,
        params,
        method: API_METHOD.GET,
      };

      axios(dataReq)
        .then((response) => {
          dispatch(fetchSuccess(response.data));
        })
        .catch((error) => {
          dispatch(fetchError(error))
         
        });
    });
  };

export default apiActionCreator;
