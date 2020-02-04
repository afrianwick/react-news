const initialState = {
  sources: [],
  loading: false,
}

export const FETCH_SOURCES = 'FETCH_SOURCES'
export const SOURCES_LOADED = 'SOURCES_LOADED'
export const SOURCES_EXIST = 'SOURCES_EXIST'

function sourcesReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_SOURCES:
      return {
        ...state,
        loading: true
      }
    case SOURCES_LOADED:
      return {
        loading: false,
        sources: action.sources
      }
    case SOURCES_EXIST:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default sourcesReducer