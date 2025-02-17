
"use client";
import Link from 'next/link';
import React, { useRef } from 'react'
import { Dropdown } from 'react-bootstrap'

const HeaderDropdown = ({ title, list }) => {
    const ref = useRef();
    const handleClick = () => {
        ref.current && ref.current.click();
    }
    return (
        <Dropdown>
            <Dropdown.Toggle ref={ref}>
                {title}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {
                    list.map((item, index) => {
                        return (
                            <Link onClick={() => handleClick()} href={item.url} key={index}>{item.title}</Link>
                        )
                    })
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default HeaderDropdown
