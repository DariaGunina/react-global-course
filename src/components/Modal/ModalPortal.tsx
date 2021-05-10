import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function ModalPortal({ children, selector }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [selector]);

    return mounted ? createPortal(children, document.querySelector(selector)) : null
};