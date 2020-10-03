import { MainLayout } from '../../layouts/MainLayout'
import { Card } from 'react-bootstrap'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'
import ReactMarkdown from "react-markdown";

// import data
import { radio } from '../../data/radio/radio'
import { local } from '../../data/localization_data/pages/radio/radio'

// import styles
import style  from '../../styles/pages/radio_page.module.scss'

export default function RadioPage() {
    return (
        <MainLayout
            title={local.main_layout_title}
            description={local.main_layout_description}
        >
            <HeadingComponent 
                heading={local.heading_title}
            />
            {
                radio.map( elem => {
                    return (
                        <Card key={elem.id}>
                            <Card.Body>
                                <Card.Title>
                                    {elem.title}
                                </Card.Title>
                                <ReactMarkdown
                                    source={elem.text} 
                                />
                                <audio 
                                    className={` ${style.audio_width} `}
                                    controls 
                                    src={elem.src}
                                >
                                </audio>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </MainLayout>
    )
}  