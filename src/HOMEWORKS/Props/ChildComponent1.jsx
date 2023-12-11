import React from 'react';

const ChildComponent1 = (props) => {
  return (
  <div style={{ border: '1px solid #aaa', padding: '8px', margin: '8px' }}>
  <h3>Дочерний компонент 1</h3>
  <p>{props.message}</p>
</div>
  );
};

export default ChildComponent1;