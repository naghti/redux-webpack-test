import axios from "axios"
import { setIsFetching, setRepos } from "../../reducers/reposReducer"

export const getRepos = (searchQuery = "stars:%3E1") => {
  if (searchQuery == "") searchQuery = "stars:%3E1" 

  const token = "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"
  const api = `https://api.github.com/search/repositories?q=${searchQuery}`

  return async (dispatch) => {
    dispatch(setIsFetching(true))
    const response = await axios.get(
      api, 
      {headers: {
          "Authorization": `token ${token}`
      }}
    )
    dispatch(setRepos(response.data))
  }
}