import React from 'react';
import BillList from './BillList';
import BillDetail from './BillDetail';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <BillList />
        </div>
        <div className="column eight wide">
          <BillDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
