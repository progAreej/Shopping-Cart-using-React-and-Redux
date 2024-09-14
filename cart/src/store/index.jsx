import { createStore } from 'redux';
import cartReducer from './reducers';

// Create Redux store
const store = createStore(cartReducer);

// Persist cart state to localStorage whenever it changes
store.subscribe(() => {
  localStorage.setItem('cart', JSON.stringify(store.getState().cart));
});

export default store;
