import axios from "axios";
import { returnErrors } from "./errorAction";
import { BUYTOKEN_FAIL, BUY_TOKEN, CLEAR_BUY_TOKEN } from "./type";
import { tokenConfig } from "./userAction";

export const token = (buyToken) => (dispatch, getState) => {
  axios
    .post(
      `${process.env.REACT_APP_API}/fastpayr/api/v1/payment/singlepayment`, buyToken, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: BUY_TOKEN,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "BUYTOKEN_FAIL")
      );
      dispatch({
        type: BUYTOKEN_FAIL,
      });
    });
};

export const clearToken = () => dispatch => {
  dispatch({
    type: CLEAR_BUY_TOKEN
  })
}