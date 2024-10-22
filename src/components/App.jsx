import React from 'react'
import "./app.less"
import Test from './Test'
import { useDispatch, useSelector } from 'react-redux'
import Main from './main/Main'

function App() {
  const dispatch = useDispatch()

  return (
    <div className='app'>
      <Main/>
    </div>
  )
}

export default App