import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './counterSlice';

const View = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => { dispatch(increment()) }}>increment</button>
            <button onClick={() => { dispatch(decrement()) }}>decrement</button>
            <button onClick={() => { dispatch(reset()) }}>reset</button>
        </div>
    );
};

export default View;