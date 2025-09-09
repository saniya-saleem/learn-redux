import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { decrement, increment } from './action'
const App = () => {
  const counter =useSelector(state => state.counter)
  const islogged=useSelector(state=>state.islogged)
  const dispatch=useDispatch()
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={()=>dispatch(increment(5))}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>

      {islogged ?<h3>valuable information i shouldn't see</h3>:''}
    </div>
  )
}

export default App