import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

export default function FadeIn({ children, vars }) {
    const el = useRef();
    const animation = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            animation.current = gsap.from(el.current.children, {
                opacity: 0,
                ...vars
            });
        });
        return () => ctx.revert();
    }, []);

    return <span ref={el}>{children}</span>;
}
