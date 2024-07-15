import { useState } from 'react';
import Context from './Context.jsx';

export default function ContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [cart, setCart] = useState([])
  const context = { currentUser, setCurrentUser, cart, setCart };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}