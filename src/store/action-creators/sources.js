import axios from 'axios'

import {
  FETCH_SOURCES,
  SOURCES_LOADED,
  SOURCES_EXIST
} from '../reducers/sources'

export function startFetchingSources () {
  return {
    type: FETCH_SOURCES
  }
}

export function loadSources () {
  return async function (dispatch, getState) {
    const newsSource = getState().sources.sources

    if (newsSource.length === 0) {
      dispatch(startFetchingSources())

      const target = 'https://newsapi.org/v2/sources?apiKey=7e7cba19a40d48e583b7a8195bbd4ee6'

      const { data: { sources } } = await axios.get(target)
    
      dispatch({
        type: SOURCES_LOADED,
        sources: sources
      })
    } else {
      dispatch({
        type: SOURCES_EXIST
      })
    }
  }
}