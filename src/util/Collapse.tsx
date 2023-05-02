import React, {ReactNode, useEffect, useRef} from "react";
import useMeasure from "react-use-measure";
import {animated, useSpring} from "@react-spring/web";

export type CollapseProps = {
    open: boolean;
    children: ReactNode;
}

function usePrevious<T>(value: T) {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = value
    }, [value]);
    return ref.current;
}

export function Collapse({open, children}: CollapseProps) {
    const previous = usePrevious(open);
    const [ref, {height: viewHeight}] = useMeasure();
    const {
        height,
        opacity,
        y,
    } = useSpring({
        from: {
            height: 0,
            opacity: 0,
            y: 0,
        },
        to: {
            height: open ? viewHeight : 0,
            opacity: open ? 1 : 0,
            y: open ? 0 : -15,
        },
    });
    return (
        <animated.div
            className="pointer-events-none"
            style={{
                opacity,
                height: open && previous === open ? 'auto' : height,
            }}
        >
            <animated.div ref={ref} style={{y}} children={children}/>
        </animated.div>
    );
}