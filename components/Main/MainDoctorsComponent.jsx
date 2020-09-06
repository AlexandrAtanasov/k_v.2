import { CardDeckComponent } from '../CardDeckComponent'

import { doctors } from '../../data/persons/doctors'


export function MainDoctorsComponent( ) {

    return (
        <div 
            style={{
                marginTop: "1.5rem",
            }}
        >
            <CardDeckComponent data={doctors}/>
        </div>
    )
}