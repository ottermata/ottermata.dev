import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createHashRouter, RouterProvider} from "react-router-dom";
import {Root} from "./page/root/Root";
import {ErrorPage} from "./page/error/ErrorPage";
import {Resume} from "./page/resume/Resume";
import {Index} from "./page/index/Index";

const router = createHashRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Index/>,
            },
            {
                path: "resume",
                element: <Resume/>,
            }
        ],
    },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
