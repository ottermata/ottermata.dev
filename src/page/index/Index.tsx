import React from "react";
import {ExternalLink} from "../../util/ExternalLink";

export function Index() {
    return (
        <div className="lg:max-w-screen-lg">
            <h1 className="text-center font-mono text-4xl sm:text-6xl">Christopher Krause</h1>
            <h2 className="text-center font-mono text-2xl sm:text-4xl mb-6">Software Developer</h2>
            <img
                className="overflow-hidden rounded-full mx-auto mb-4 w-32 lg:w-64 lg:float-right"
                alt="avatar"
                src="avatar.jpg"
            />
            <article className="mx-4">
                <p>
                    Hello! I'm a software developer from Germany.
                </p>
                <p>
                    I specialize in backend tasks with Python like automation, BigData and APIs.
                    For more performance critical or portable tasks I try to use Rust and dabble in TypeScript when there's a need for a frontend.
                </p>
            </article>
            <div className="text-gray-500 text-center mt-4 mx-auto w-fit">
                <hr className="mb-2 -mx-6"/>
                <p>Icons by <ExternalLink to="https://simpleicons.org/">Simple Icons</ExternalLink></p>
            </div>
        </div>
    );
}