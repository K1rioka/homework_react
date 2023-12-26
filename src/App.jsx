import React, { useState, useContext, useRef, useCallback, useMemo } from 'react';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

const ThemeContext = React.createContext();

const NotFound404 = () => {
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

const TextInput = () => {
  const inputRef = useRef(null);
  const [text, setText] = useState('');

  const handleClear = useCallback(() => {
    inputRef.current.value = '';
    setText('');
  }, []);

  const handleInputChange = useCallback(() => {
    setText(inputRef.current.value);
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} onChange={handleInputChange} />
      <button onClick={handleClear}>Clear</button>
      <label>{text}</label>
    </div>
  );
};

const ItemList = () => {
  const handleItemClick = useCallback((index) => {
    console.log(`Item clicked at index: ${index}`);
  }, []);

  const items = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], []);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} onClick={() => handleItemClick(index)}>
          Item {item}
        </div>
      ))}
    </div>
  );
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>Theme App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ color: theme === 'light' ? 'black' : 'white' }}>
      <p>This is some content.</p>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ref" element={<TextInput />} />
        <Route path="/context" element={<ThemeProvider><Header /><Content /></ThemeProvider>} />
        <Route path="/callback" element={<ItemList />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
