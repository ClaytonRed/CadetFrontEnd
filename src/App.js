import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './Components/Header/NavigationBar'
import AppRoutes from './Components/AppRoutes';
import { useEffect, useState } from 'react';
import { getToken, isAdmin } from './Components/_utils';

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
        isAdmin={isAdmin()}
      />
      <AppRoutes
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        isAdmin={isAdmin()}
      />
      {/* <SiteFooter /> */}
    </BrowserRouter>
  );
}

export default App;