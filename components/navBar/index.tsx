import Link from "next/link"
import { useState } from "react"
import LogoSocial from "../layout/LogoSocial"


interface INavBarProps {
    open: boolean
}

interface INavBarState {
    menuNav: {
        url: string,
        title: string
    }[],
    menuSocial: {
        urlImg: string,
        altImg: string,
        title: string,
        linkSocical: string
    }[]
}

const initState = {
    menuNav: [
        {
            url: "/experience",
            title: "Experience"
        },
        {
            url: "/project",
            title: "Project"
        },
        {
            url: "/contact",
            title: "Contact"
        },
    ],
    menuSocial: [
        {
            urlImg: "/images/icons/github.svg",
            altImg: "My Github",
            title: "Github",
            linkSocical: "https://github.com/vanhuydotcom"
        },
        {
            urlImg: "/images/icons/linkedin.svg",
            altImg: "My Linkedin",
            title: "Linkedin",
            linkSocical: "https://www.linkedin.com/in/huy-van-877b51218"
        },
        {
            urlImg: "/images/icons/facebook.svg",
            altImg: "My Facebook",
            title: "Facebook",
            linkSocical: "https://www.facebook.com/vanhuy91097"
        }
    ]
}

const NavBar = ({ open }: INavBarProps) => {

    const [state, setState] = useState<INavBarState>(initState)

    return (
        <div className={open ? "navigate open" : "navigate"}>
            <div className="navigate__wrapper">
                <nav className="navigate__wrapper-nav">
                    {
                        state?.menuNav?.map((e, i) => (
                            <Link href={e?.url ?? ""} key={i}>
                                <a>{e?.title ?? ""}</a>
                            </Link>
                        ))
                    }
                </nav>
                <div className="navigate__wrapper-social">
                    {
                        state?.menuSocial?.map((e, i) => (
                            <a href={e?.linkSocical ?? ""} key={i} target="_blank" rel="noopener noreferrer">
                                <LogoSocial url={e?.urlImg ?? ""} alt={e?.altImg ?? ""} />
                                <span>{e?.title ?? ""}</span>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBar  