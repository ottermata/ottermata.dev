import React, {ReactNode} from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {GitHubIcon, LinkedInIcon} from "../../util/Icon";

type ExternalLinkProps = {
    to: string;
    children: ReactNode;
};
function ExternalLink({to, children}: ExternalLinkProps) {
    return (
        <a
            className="p-1 opacity-70 hover:opacity-100"
            href={to}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    );
}

export function Root() {
    return (
        <>
            <nav className="flex justify-between">
                <div className="pages flex">
                    <NavLink to="">Home</NavLink>
                    <NavLink to="resume">Résumé</NavLink>
                </div>
                <div className="external flex pr-0.5">
                    <ExternalLink to="https://github.com/ottermata"><GitHubIcon/></ExternalLink>
                    <ExternalLink to="https://www.linkedin.com/in/ottermata"><LinkedInIcon/></ExternalLink>
                </div>
            </nav>
            <div className="content max-w-fit mt-1 mx-auto">
                <Outlet/>
            </div>
        </>
    );
}
