import { WALLET_LOADING, WALLET_LOADED, WALLET_ERROR, FUND_WALLET_FAIL, FUND_WALLET } from '../_actions/type'

const initialState = {
  isLoading: false,
  wallet: null, 
  success: false
}

function walletReducer (state = initialState, action) {
  switch (action.type) {
    case WALLET_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case WALLET_LOADED:
      return {
        ...state,
        wallet: action.payload,
        isLoading: false,
      }
    case FUND_WALLET:
      return {
        ...state,
        wallet: action.payload,
        isLoading: false,
        success: true
      }
    case FUND_WALLET_FAIL:
    case WALLET_ERROR:
      return {
        ...state,
        isLoading: false,
        success: false
      }
    default:
      return state;
  }
}

export default walletReducer