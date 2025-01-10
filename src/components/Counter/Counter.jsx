import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/features/conter/CounterSlice'
import '../../styles/stylesCounter.css';

export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
        
    <span className="counter-value">{count}</span>

    <div className="counter-buttons">
      <button
        className="counter-button"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="counter-button"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  </div>
  );
}