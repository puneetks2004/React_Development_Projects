
import React from "react"
import "./max-wrapper.css"

export default function MaxWidthWrapper({ children }) {
    return (
        <>
            <div className="lab">
                {children}
            </div>
        </>
    )
}