interface INavBarProps {
    open: boolean
}

const NavBar = ({ open }: INavBarProps) => {
    return (
        <div className={open ? "navigate open" : "navigate"}>
            <div className="container">
                <div className="navigate__wrapper">
                    <div className="navigate__menu">
                        sdnasjdasdahsdjasd
                    </div>
                    <div className="navigate__social">
                        asjdaksbdkasbdkasb
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar  