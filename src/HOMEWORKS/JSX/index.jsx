import React from 'react';

const MyComponent = () => {
  // Пример JS данных
  const myNumber = 42;
  const myString = 'Hello, React!';

  return (
    <div>
      <h1>{myString}</h1>
      <p>My favorite number is {myNumber}.</p>
      <div>
        {/* Вложенный тег */}
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default MyComponent;
