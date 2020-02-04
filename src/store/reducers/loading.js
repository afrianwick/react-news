import { CHANGE_LOADING } from '../types/loading'

const initialLoading = {
  loading: false
}

function loadingReducer (state = initialLoading, action) {
  switch (action.type) {
    case CHANGE_LOADING: {
      return {
        ...state,
        loading: !state.loading
      }
    }
    default:
      return state;
  }
}

export default loadingReducer
