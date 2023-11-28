import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import PersonsList from "../screens/persons-list";
import NewPerson from "../screens/new-person";
import NewExperience from "../screens/new-experience";

export default createBrowserRouter([
    {
        path: "/",
        element: <PersonsList />
    },
    {
        path: "/new",
        element: <NewPerson />
    },
    {
        path: "/newEx/:id",
        element: <NewExperience />
    },
]);