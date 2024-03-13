import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Form from './pages/Form';
import Game from './pages/Game';
import {Auth} from './context/Auth';


function App() {
    
    const router = createBrowserRouter([
      {
      path: '/',
      element: (
      <Auth>
        <Layout />
      </Auth>
      ),
      children: [
        {
        path: "/form",
        element: <Form />
        },
        {
          path: "/game",
          element: <Game />
        },

      ]
  }
    ])
  ;
  return (
    <RouterProvider router={router} />
  );
}

export default App;