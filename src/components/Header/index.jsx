import React from "react"

import logo from '../../../assets/logo_G.svg'
import menu from '../../../assets/menu.svg'

export function Header() {
    return (
        <header className="fixed top-0 right-0 left-0 bg-[#09041Dc7] backdrop-blur-xl z-[999]">
            <div className="flex justify-between px-5 py-5">
            <img src={logo} alt="Logo Gustavo" />
            <img src={menu} alt="menu" />
            </div>
        </header>
    )
}


