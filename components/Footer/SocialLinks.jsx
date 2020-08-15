import React from 'react'
import { Container, ButtonGroup, Button } from 'react-bootstrap'

export function SocialLinks() {
    return (
        <Container>
            <form>
                {/* <fieldset> */}
                    <legend>Our social networks:</legend>
                    <ButtonGroup aria-label="Basic example" size="lg">
                        <Button variant="secondary">
                            <a href="https://www.instagram.com/kinezis_perm/" target="_blank">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </Button>
                        <Button variant="secondary">
                            <a href="https://vk.com/kinezis59" target="_blank">
                                <i class="fab fa-vk"></i>
                            </a>
                        </Button>
                        <Button variant="secondary">
                            <a href="https://www.facebook.com/kinezisperm/" target="_blank">
                                <i class="fab fa-facebook"></i>
                            </a>
                        </Button>
                    </ButtonGroup>
                {/* </fieldset> */}
            </form>
        </Container>
    )
}