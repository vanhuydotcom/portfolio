import Link from "next/link"
import Image from "next/image"
const Header = () => {
    return (
        <header className="header container-fluid">
            <Link href="/">
                <a className="header__logo">
                    <img src="/images/logo/logo.svg" alt="" />
                </a>
            </Link>
            <button className="header__menu"><span>Me</span><span>nu</span></button>
        </header>
    )
}

export default Header  