import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import Main from './Layout/Main';

function App() {
  return (
    <div>
      <RouterProvider router={router}>
        <Main>
        </Main>
      </RouterProvider>
    </div>
  );
}

export default App;
