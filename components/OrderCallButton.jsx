import React from 'react'
import Link from 'next/link'
import { Button } from 'react-bootstrap'

export function OrderCallButton() {
    return (
        <Link href={'/order-call'} passHref>
            <a>
                <Button variant="success">
                    Call back!
                </Button>
            </a>
        </Link>
    )
}