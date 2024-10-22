import React, { useEffect, useState } from 'react'
import './main.less'
import {BrowserRouter} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getRepos } from '../actions/repos'
import Repo from './repo/Repo'

function Main() {
  const dispatch = useDispatch()
  const repos = useSelector(state => state.repos.items)
  const isFetching = useSelector(state => state.repos.isFetching)
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    dispatch(getRepos())
  }, [])

  const searchHandler = () => {
    dispatch(getRepos(searchValue))
  }

  return (
    <div>
      <div className="search">
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" className="search-input" placeholder='input repo name'/>
        <button className='search-btn' onClick={searchHandler}>Search</button>
      </div>
      {
        isFetching == false 
          ?
        repos.map((repo, index) => 
          <Repo 
            key={index}
            repo={repo} 
          />
        )
          : 
        <div className="fetching">

        </div>

      }
    </div>
  )
}

export default Main