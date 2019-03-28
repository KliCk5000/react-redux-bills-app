import React from 'react';
import { connect } from 'react-redux';

const BillDetail = ({ bill }) => {
  if (!bill) {
    return <div>Select a bill</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Payee: {bill.payee}
        <br />
        Amount: ${bill.amount}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { bill: state.selectedBill };
};

export default connect(mapStateToProps)(BillDetail);
