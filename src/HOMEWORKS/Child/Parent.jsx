import React from 'react';

const ParentComponent = (props) => {
  return (
    <div>
      <h2>Parent Component</h2>
      <div>
        {props.children}
      </div>
    </div>
  );
};

export default ParentComponent;
