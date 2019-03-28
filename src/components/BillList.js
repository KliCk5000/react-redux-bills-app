import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBill } from '../actions';

class BillList extends Component {
  state = {};
  renderList() {
    return this.props.bills.map((bill) => {
      return (
        <div className="item" key={bill.payee}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectBill(bill)}
            >
              Select
            </button>
          </div>
          <div className="content">{bill.payee}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { bills: state.bills };
};

export default connect(
  mapStateToProps,
  {
    selectBill,
  },
)(BillList);
