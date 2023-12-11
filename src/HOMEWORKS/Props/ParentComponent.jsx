import React from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';

const ParentComponent = () => {
  const dataForChild1 = "Привет из Родительского компонента!";
  const dataForChild2 = "Еще одно сообщение для дочернего компонента.";

  return (
      <div style={{ border: '2px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>Родительский компонент</h2>
      <ChildComponent1 message={message1} />
      <ChildComponent2 message={message2} />
    </div>
  );
};

export default ParentComponent;
