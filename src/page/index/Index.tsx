import React from "react";
import {Link} from "react-router-dom";

export function Index() {
    return (
        <>
            <p>Hello! This is my WIP webpage. You can check out my résumé <Link to="resume">here</Link></p>
        </>
    );
}