import React, { Children } from 'react'
import Link from 'next/link'

import { NavBarComponent } from '../components/Main/Navbar/NavBarComponent'
import { HeadComponent } from '../components/HeadComponent'
import { FooterComponent } from '../components/Footer/FooterComponent'

export function MainLayout( {children, title, description} ) {

    return (
        <React.Fragment>
            <HeadComponent 
                title={title}
                description={description}
            />
            <NavBarComponent />
            
            <main>
                {children}
            </main>
            
            <FooterComponent />


            <style jsx global>
            {`
                .header {
                    background-color: rgba(0, 0, 0, 0.0);
                }
            `}
        </style>

        </React.Fragment>
    )
} 