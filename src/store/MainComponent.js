import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment,decrement,incrementbyAmount} from './feature/counter/counterSlice'

function MainComponent(props) {

    const [input, setInput] = useState()
    const dispatch = useDispatch()
    const count = useSelector(state => state.counter.value)//state.sliceName.stateValue

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(increment())
    }
    const handleSubmit1=(e)=>{
        e.preventDefault();
        dispatch(decrement())
    }
    const handleSubmit2=(e,num)=>{
        e.preventDefault();
        dispatch(incrementbyAmount(num))
    }

    return (
        <div>
            <form>
                <br/><br/><button className='btn btn-info' onClick={(e) => {handleSubmit(e)}}>increment</button><br/><br/>
                <button className='btn btn-info' onClick={(e) => {handleSubmit1(e)}}>decrement</button><br/><br/>
                <button className='btn btn-info' onClick={(e) => {handleSubmit2(e,input)}}>increment by Amount</button><br/><br/>
                <input type='text' placeholder='enter number' onChange={(e) => setInput(e.target.value)} /><br/><br/>
                result is {count}
            </form>
        </div>
    );
}

export default MainComponent;