import React, { useState } from "react"
import Link from "next/link"
/**
 * Components
 */
import NavBar from "../navBar"

const Header = () => {
    const [openNavBar, setOpenNavBar] = useState(false)
    return (
        <>
            <header className="header container-fluid">
                <Link href="/">
                    <a className={openNavBar ? "header__logo active" : "header__logo"}>
                        <img src="/images/logo/logo.png" alt="" />
                    </a>
                </Link>
                <button className={openNavBar ? "header__menu active" : "header__menu"}
                    onClick={() => {
                        if (openNavBar) {
                            document.body.style.overflow = "auto"
                            setOpenNavBar(!openNavBar)
                        } else {
                            document.body.style.overflow = "hidden"
                            setOpenNavBar(!openNavBar)
                        }
                    }}>
                    <span>Me</span><span>nu</span>
                </button>
            </header>
            <NavBar open={openNavBar} />
        </>
    )
}

export default Header  