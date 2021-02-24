import Head from 'next/head'
import React from 'react'

export function HeadComponent( {title, description} ) {
    return (
        <React.Fragment>
            <Head>
                <title>
                    {title} | Кинезитерапия в Перми
                </title>
                <meta 
                    name='description' 
                    content={description}
                />
                <meta charSet="utf-8"/>
        
            </Head>
        </React.Fragment>
    )
}