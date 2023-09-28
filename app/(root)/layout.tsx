import React from 'react'
import Masthead from '@/components/Masthead'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Masthead />
            {children}
        </>
    )
}

export default layout