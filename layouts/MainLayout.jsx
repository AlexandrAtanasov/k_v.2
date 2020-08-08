import React, { Children } from 'react'
import Link from 'next/link'
import { NavigationBar } from '../components/Navbar/NavigationBar'
import { HeadComponent } from '../components/HeadComponent'
import { FooterComponent } from '../components/FooterComponent'

export function MainLayout( {children, title, description} ) {

    return (
        <React.Fragment>
            <HeadComponent 
                title={title}
                description={description}
            />
            <NavigationBar />
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