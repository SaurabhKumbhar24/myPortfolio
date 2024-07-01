import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './pages/App';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
      path: "/projects",
      element: <Projects />,
  },
  {
      path: "/contact",
      element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider
    router={router}
  />
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
