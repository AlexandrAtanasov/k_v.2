import React from 'react'
import { Container, ButtonGroup, Button } from 'react-bootstrap'

// import style
import style from '../../styles/components/footer/SocialLinksComponent.module.scss'

// import localization data
import { local } from '../../data/localization_data/components/Footer/SocialLinksComponent'

export function SocialLinksComponent() {
    return (
        <Container style={{textAlign:'center'}}>
            <form>
                <legend>{local.form_title}</legend>
                <ButtonGroup 
                    aria-label="Basic example" 
                    size="md" 
                    className={`social_links_color ${style.social_links_border}`}
                >
                    <Button 
                        as='a' 
                        href="https://www.instagram.com/kinezis_perm/" 
                        target="_blank" 
                        variant="secondary"
                        className="social_links_color"
                    >
                        {/* <i className="fab fa-instagram"></i> */}
                        Inst
                    </Button>
                    <Button 
                        as='a' 
                        href="https://vk.com/kinezis_centr" 
                        target="_blank" 
                        variant="secondary"
                        className="social_links_color"
                    >
                        <i className="fab fa-vk"></i>
                    </Button>
                    {/* <Button 
                        as='a' 
                        href="https://www.facebook.com/kinezisperm/" 
                        target="_blank" 
                        variant="secondary"
                        className="social_links_color"
                    >
                        <i className="fab fa-facebook"></i>
                    </Button> */}
                </ButtonGroup>
            </form>
        </Container>
    )
}