/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    const [state, setstate] = useState("hii");
    return (
        <>
            <Outlet state={state}></Outlet>
        </>
    )
}
