function Header() {

    const name = "Div Academy"
    const customStyle = "header-wrapper"

    return (
        <div className={customStyle}>
            {name}
        </div>
    )
}

export default Header;