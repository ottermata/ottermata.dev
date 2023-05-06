import React, {ReactNode} from "react";
import classNames from "classnames";

type ExternalLinkProps = {
    className?: string;
    to: string;
    children: ReactNode;
};

export function ExternalLink({className, to, children}: ExternalLinkProps) {
    return (
        <a
            className={classNames("opacity-70 hover:opacity-100", className)}
            href={to}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    );
}