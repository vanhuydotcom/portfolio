import React, { FC } from "react"
import Footer from "../footer"
import Header from "../header"



const MainLayOut: FC = ({ children }) => {
    return (
        <>
            <Header />
            <main className="main">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default MainLayOut
