import Link from "next/link"
import { useState } from "react"

interface IFooterState {
    menuFooter: {
        url: string,
        title: string
    }[],
    menuSocial: {
        urlImg: string,
        altImg: string,
        title: string,
        linkSocical: string
    }[],
    info: {
        email: string,
        address: {
            number: string;
            name: string;
            ward: string;
            district: string;
            city: string;
        },
        phone: string;
        license: {
            title: string;
            description: string
        }
    }
}

const initState = {
    menuFooter: [
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
    ],
    info: {
        email: "Dvhuy.dev@gmail.com",
        address: {
            number: "290B",
            name: "Duong Ba Trac",
            ward: "Ward 1",
            district: "District 8",
            city: "Ho Chi Minh",
        },
        phone: "+84 776 34 96 97",
        license: {
            title: "Designed & Developed by Huy",
            description: "All rights reserved 2022"
        }
    }
}

export default function Footer() {
    const [state, setState] = useState<IFooterState>(initState)
    return (
        <footer className="footer ">
            <div className="footer__wrap">
                <div className="menu">
                    {
                        state?.menuFooter?.map((e, i) => (
                            <Link href={e?.url ?? ""} key={i}>
                                <a>{e?.title ?? ""}</a>
                            </Link>
                        ))
                    }
                </div>
                <div className="contact">
                    <div className="contact__info">
                        <p className="contact__info-email"><a href={`mailto:${state?.info?.email}`}> {state?.info?.email ?? ""}.</a></p>
                        <p className="contact__info-address">
                            <a href="https://goo.gl/maps/mdMaaAahH2AP1gUW7" target="_blank" rel="noopener noreferrer">
                                <span>{state?.info?.address?.number} {state?.info?.address?.name}.</span> <br />
                                <span>{state?.info?.address?.ward}, {state?.info?.address?.district}, {state?.info?.address?.city}.</span>
                            </a>
                        </p>
                        <p className="contact__info-phone">{state?.info?.phone ?? ""}</p>
                    </div>
                    <div className="contact__social">
                        {
                            state.menuSocial.map((e, i) => (
                                <Link href={e?.linkSocical ?? ""} key={i}>
                                    <a>{e?.title ?? ""}</a>
                                </Link>
                            ))
                        }
                    </div>
                    <div className="contact__license">
                        <span>{state?.info?.license?.title ?? ""}</span>
                        <span>{state?.info?.license?.description ?? ""}</span>
                    </div>
                </div>

            </div>
            <div className="footer__btt">
                <button className="footer__btt-btn" onClick={() => {
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth"
                    })
                }}>
                    <img src="/images/icons/back-to-top.svg" alt="Back to top" />
                </button>
            </div>
        </footer>
    )
}