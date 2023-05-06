import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {GitHubIcon, LinkedInIcon} from "../../util/Icon";
import {ExternalLink} from "../../util/ExternalLink";

export function Root() {
    return (
        <>
            <nav className="flex justify-between">
                <div className="pages flex">
                    <NavLink to="">Home</NavLink>
                    <NavLink to="resume">Résumé</NavLink>
                </div>
                <div className="external flex pr-0.5">
                    <ExternalLink className="p-1" to="https://github.com/ottermata"><GitHubIcon/></ExternalLink>
                    <ExternalLink className="p-1" to="https://www.linkedin.com/in/ottermata"><LinkedInIcon/></ExternalLink>
                </div>
            </nav>
            <div className="content max-w-fit mt-1 mx-auto">
                <Outlet/>
            </div>
        </>
    );
}
