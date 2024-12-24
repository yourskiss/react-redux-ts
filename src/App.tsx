import { useSelector, useDispatch } from 'react-redux';
import "./App.css";

export default function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      
        <h1>Count: {count}</h1>
        <div>
          <button
            className={count === 10 ? 'disabled' : ''}
            onClick={() => dispatch({ type: 'INCREMENT' })}
          >
            Increment
          </button>
          <button
            className={count === 0 ? 'disabled' : ''}
            onClick={() => dispatch({ type: 'DECREMENT' })}
          >
            Decrement
          </button>
        </div>
    </div>
  );
}

 