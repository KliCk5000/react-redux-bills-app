// Action creator
export const selectBill = (bill) => {
  // Return an action
  return {
    type: 'BILL_SELECTED',
    payload: bill,
  };
};
