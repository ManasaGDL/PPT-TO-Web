import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';
import { useEffect } from 'react';
// defaultTheme
import themes from 'themes';
import { useState } from 'react';
// project imports
import NavigationScroll from 'layout/NavigationScroll';
import { Context ,weekContext} from 'context/Context';
// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector((state) => state.customization);
const [ data , setData] = useState([])
const [ week , setWeek] = useState(localStorage.getItem('week'))

  return (
   <Context.Provider value= {{data,setData}}>
    <weekContext.Provider value={{week,setWeek}}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
    </weekContext.Provider>
    </Context.Provider>
  );
};

export default App;
