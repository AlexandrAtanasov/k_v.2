import React from 'react'
import { Container, ButtonGroup, Button } from 'react-bootstrap'

export function SocialLinks() {
    return (
        <Container>
            <form>
                <legend>Our social networks:</legend>
                <ButtonGroup aria-label="Basic example" size="md">
                    <Button as='a' href="https://www.instagram.com/kinezis_perm/" target="_blank" variant="secondary">
                        <i class="fab fa-instagram"></i>
                    </Button>
                    <Button as='a' href="https://vk.com/kinezis59" target="_blank" variant="secondary">
                        <i class="fab fa-vk"></i>
                    </Button>
                    <Button as='a' href="https://www.facebook.com/kinezisperm/" target="_blank" variant="secondary">
                        <i class="fab fa-facebook"></i>
                    </Button>
                </ButtonGroup>
            </form>
        </Container>
    )
}