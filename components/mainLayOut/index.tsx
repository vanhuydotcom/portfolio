import React, { FC } from "react"
import Header from "../header"



const MainLayOut: FC = ({ children }) => {
    return (
        <>
            <Header />
            <main className="main">
                {children}
            </main>
        </>
    )
}

export default MainLayOut