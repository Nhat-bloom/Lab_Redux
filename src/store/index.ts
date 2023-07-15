import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import calculatorReducer from './counter/types';

import { CalculatorState } from './counter/types';

export interface RootState {
  calculator: CalculatorState;
}

const rootReducer = combineReducers({
  calculator: calculatorReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;