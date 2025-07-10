import React from 'react'

export default function Button({ className, children, onClick }) {
    return (
        <button
            className={`py-2 px-3 text-sm sm:text-base sm:py-3 sm:px-6 rounded-full font-semibold ${className}`}
            onClick={onClick}
        >{children}</button>
    )
}
