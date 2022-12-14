import React, { useEffect, useState } from 'react'

export const getDate = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const updateTimer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        return () => {
            clearInterval(updateTimer);
        }
    }, [currentDate]);

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    return {
        day,
        month,
        year,
        hour,
        minute,
        second
    }
}