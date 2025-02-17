"use client";
import { Container, Dropdown } from 'react-bootstrap'
import Image from 'next/image'
import logo from "../../../../public/assets/logo/logo.png";
import React from 'react'
import Link from 'next/link';
import HeaderDropdown from './header-dropdown';

const Header = () => {
    return (
        <header className="header">
            <Container>
                <div className="header_in">
                    <Link href="/" className="logo">
                        <Image priority src={logo} alt="logo" />
                    </Link>
                    <div className="header_nav">
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li>
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
                            <li><Link href="/">Partners</Link></li>
                            <li><Link href="/">Marketplace</Link></li>
                            <li><Link href="/">Roadmap</Link></li>
                        </ul>
                    </div>
                    <div className="header_action">
                        <button type="button" className="action_btn">Sign Up</button>
                        <button type="button" className="d-lg-none toggle_btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
