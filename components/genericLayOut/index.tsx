import React, { FC } from "react"
import Footer from "../footer"
import Header from "../header"


const GenericLayOut: FC = ({ children }) => {
    return (
        <div className="generic sh">
            <Header />
            <main className="main">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default GenericLayOut
