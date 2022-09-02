import React from 'react'

const TimerRow = ({ children }: any) => {
    return (
        <div className="flex space-x-6 p-2 m-4">
            {children}
        </div>
    )
}

export default TimerRow