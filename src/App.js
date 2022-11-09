import logo from './logo.svg';
import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import router from "./router/router"
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
