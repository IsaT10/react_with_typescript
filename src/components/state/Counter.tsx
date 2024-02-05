import React, { useReducer } from 'react';

interface CounterState {
  count: number;
}

// type CounterAction = {
//   type: string;
//   payload: number;
// };
type UpdatedAction = {
  type: 'increment' | 'decrement';
  payload: number;
};

type ResetAction = {
  type: 'reset';
  payload?: number; //optional
};

type CounterAction = UpdatedAction | ResetAction;

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };

    case 'decrement':
      return { count: state.count - action.payload };

    case 'reset':
      return initialState;

    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </div>
  );
}
