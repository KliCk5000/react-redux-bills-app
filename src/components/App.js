import React from 'react';
import BillList from './BillList';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <BillList />
        </div>
      </div>
    </div>
  );
};

export default App;
