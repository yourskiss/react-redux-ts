
 import { createStore, Action } from 'redux';

 // Define the initial state type
 interface State {
   count: number;
 }
 
 const initialState: State = {
   count: 0,
 };
 
 // Define the action types
 interface IncrementAction extends Action<'INCREMENT'> {}
 interface DecrementAction extends Action<'DECREMENT'> {}
 
 type CounterActions = IncrementAction | DecrementAction;
 
 // Define the reducer function with the appropriate types
 const counterReducer = (state: State = initialState, action: CounterActions): State => {
   switch (action.type) {
     case 'INCREMENT':
       return { ...state, count: state.count + 1 };
     case 'DECREMENT':
       return { ...state, count: state.count - 1 };
     default:
       return state;
   }
 };
 
 // Create the Redux store
 const store = createStore(counterReducer);
 export default store;
 