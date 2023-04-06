import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './components/Header/NavigationBar'
import AppRoutes from './components/AppRoutes';
import { useEffect, useState } from 'react';
import { getToken } from './components/_utils';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <NavigationBar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <AppRoutes
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
    </BrowserRouter>
  );
}

export default App;