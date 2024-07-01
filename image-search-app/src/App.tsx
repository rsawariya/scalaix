import React from 'react';
import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';
import { Home, ImageDetails } from './pages';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import theme from './themes/theme';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/details/:id',
    element: <ImageDetails />,
  },
];

const router = createBrowserRouter(routes);

const App: React.FC = () => {
  return (
    <Box display='flex' width='98vw' flexDirection='column' justifyContent='center' sx={{my:3}}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Box>);
};

export default App;
