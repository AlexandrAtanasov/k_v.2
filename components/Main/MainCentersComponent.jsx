import { CardComponentImg } from '../CardComponents/CardComponentImg'

// import data
import { about_centers } from '../../data/main/about_centers/about_centers'


export function MainCentersComponent( ) {
    return (
        <div>
            {
                about_centers.map( elem => {
                    return (
                        <CardComponentImg 
                        key={elem.id}
                        cardTitle={elem.title}
                        cardText={elem.text}
                        cardImg={elem.img}
                        />
                        )
                    })
            }
        </div>
    )
}