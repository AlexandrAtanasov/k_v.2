import React from 'react'
import Link from 'next/link'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { SocialLinks } from './Footer/SocialLinks'

export function FooterComponent() {
    return (
        <footer className='footer mt-auto py-3 bg-dark text-white'>
            <div className='container'>Place sticky footer content here.</div>
            <SocialLinks />
        </footer>
    )
}