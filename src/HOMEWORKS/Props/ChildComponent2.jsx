import React from 'react';

const ChildComponent2 = (props) => {
  return (
    <div>
    <div style={{ border: '1px solid #aaa', padding: '8px', margin: '8px' }}>
      <h3>Дочерний компонент 2</h3>
      <p>{props.message}</p>
    </div>

    </div>
  );
};

export default ChildComponent2;
