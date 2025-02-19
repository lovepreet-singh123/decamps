"use client";
import { Container, Dropdown } from 'react-bootstrap'
import Image from 'next/image'
import logo from "../../../../public/assets/logo/logo.png";
import React, { useState } from 'react'
import Link from 'next/link';
import HeaderDropdown from './header-dropdown';

const Header = () => {
    const [active, setActive] = useState(false);
    const handleClick = () => setActive(!active);
    return (
        <>
            <header className="header">
                <div onClick={handleClick} className={`backdrop ${active ? 'active' : ""}`}></div>
                <Container>
                    <div className="header_in">
                        <Link href="/" className="logo">
                            <Image priority src={logo} alt="logo" />
                        </Link>
                        <div className={`header_nav ${active ? 'active' : ""}`}>
                            <Link href="/" onClick={handleClick} className="logo d-lg-none">
                                <Image priority src={logo} alt="logo" />
                            </Link>
                            <ul>
                                <li onClick={handleClick}><Link href="/">Home</Link></li>
                                <li
                                // onClick={handleClick}
                                >
                                    <HeaderDropdown
                                        title="Learn"
                                        list={
                                            [
                                                { title: "Docs", url: "/" },
                                                { title: "Blog", url: "/" },
                                                { title: "Tokenization", url: "/" },
                                                { title: "How it works", url: "/" },
                                            ]
                                        }
                                    />
                                </li>
                                <li onClick={handleClick}><Link href="/">Partners</Link></li>
                                <li onClick={handleClick}><Link href="/">Marketplace</Link></li>
                                <li onClick={handleClick}><Link href="/">Roadmap</Link></li>
                            </ul>
                        </div>
                        <div className="header_action">
                            <button type="button" className="action_btn">Sign Up</button>
                            <button type="button"
                                onClick={handleClick}
                                className={`toggle_btn d-lg-none ${active ? 'active' : ""}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    )
}

export default Header
