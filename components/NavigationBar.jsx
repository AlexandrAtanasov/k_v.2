import React, { Children } from 'react'
import Link from 'next/link'

export function NavigationBar() {
    return (
        <React.Fragment>
            <nav>
                <Link href={'/'}><a>Main page</a></Link>
                <Link href={'/price'}><a>Price page</a></Link>
                <Link href={'/contacts'}><a>Contacts page</a></Link>
                <Link href={'/sales'}><a>Sales page</a></Link>
            </nav>

            <style jsx>{`
                nav {
                    position: fixed;
                    height: 50px;
                    left: 0;
                    right: 0;
                    top: 0;
                    background: darkblue;
                    margin: auto;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
                nav a {
                    color: white;
                    text-decoration: none;
                }
            `}
            </style>
        </React.Fragment>
    )
}