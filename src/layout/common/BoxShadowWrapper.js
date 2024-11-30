import React from 'react'

export default function BoxShadowWrapper({children}) {
    return (
        <div style={{ boxShadow: '0px 0px 5px rgba(0,0,0,0.5)', padding: '20px' }}>
            {children}
        </div>
    )
}
