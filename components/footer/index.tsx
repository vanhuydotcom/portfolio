import { useState } from "react"




interface IProps {

}

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
            number: number;
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
        email: "dvhuy.dev@gmail.com",
        address: {
            number: 290,
            name: "Duong Ba Trac",
            ward: "1",
            district: "8",
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
        <footer className="footer">

        </footer>
    )
}