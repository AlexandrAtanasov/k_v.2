import { CardComponentDeck } from '../CardComponents/CardComponentDeck'

// import data
import { doctors } from '../../data/persons/doctors'

export function MainDoctorsComponent( ) {

    return (
        <div 
            style={{
                marginTop: "1.5rem",
            }}
        >
            <CardComponentDeck data={doctors}/>
        </div>
    )
}