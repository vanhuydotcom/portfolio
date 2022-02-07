import Link from "next/link"

interface INavBarProps {
    open: boolean
}

const NavBar = ({ open }: INavBarProps) => {
    return (
        <div className={open ? "navigate open" : "navigate"}>
            <div className="container">
                <div className="navigate__wrapper">
                    <nav className="navigate__wrapper-nav">
                        <Link href="/abc">
                            <a>Experience</a>
                        </Link>
                        <Link href="/def">
                            <a>Project</a>
                        </Link>
                        <Link href="/ghi">
                            <a>Contact</a>
                        </Link>
                    </nav>
                    <div className="navigate__wrapper-social">
                        asjdaksbdkasbdkasb
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar  