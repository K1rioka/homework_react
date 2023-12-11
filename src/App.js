import React from 'react';
import PortalComponent from './HOMEWORKS/Portal/PortalComponent';
import ParentComponent from './HOMEWORKS/Child/Parent';
import ChildComponent1 from './HOMEWORKS/Child/ChildComponent1';
import ChildComponent2 from './HOMEWORKS/Child/ChildComponent2';
import MyComponent from './HOMEWORKS/JSX/index';

const App = () => {
  return (
    <div>
      <h1>Главное приложение</h1>
      <ParentComponent />
      {/* <h2>Main App</h2>
      <MyComponent /> */}
      {/* <h1>My React App</h1>
      <PortalComponent />

      <ParentComponent>
        <ChildComponent1 />
        <ChildComponent2 />
      </ParentComponent> */}

    </div>
  );
};

export default App;
