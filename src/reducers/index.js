import { combineReducers } from 'redux';

// Bill list reducer
const billsReducer = () => {
  return [
    { payee: 'Rent', amount: 500 },
    { payee: 'Verizon', amount: 50 },
    { payee: 'Comcast', amount: 60 },
    { payee: 'Netflix', amount: 12 },
  ]
};

// Selected bill reducer
const selectedBillReducer = (selectedBill = null, action) => {
  if (action.type === 'BILL_SELECTED') {
    return action.payload;
  }

  return selectedBill;
}

export default combineReducers({
  bills: billsReducer,
  selectedBill: selectedBillReducer
});