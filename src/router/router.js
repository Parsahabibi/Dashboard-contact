import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom"
import Add from "../pages/FormPages";
import SingleContacts from "../pages/SingleContacts";
import Layout from "../component/Layout/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",//3???
    element: <Layout/>,
    children: [
      {
        path: "/addContact",
        element: <Add />,
      },
      {
        path: "/updateContact/:ContactId",
        element: <Add />,
      },
      {
        path: "/singleContacts/:ContactId",
        element: <SingleContacts />,//name of pages in router is capital 
      },
    ]
  }
]);


export default router;