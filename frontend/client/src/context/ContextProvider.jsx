import { useState } from 'react';
import Context from './Context.jsx';

export default function ContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const context = { currentUser, setCurrentUser, cart, setCart, total, setTotal};

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}