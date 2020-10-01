import { CardComponentDeck } from '../CardComponents/CardComponentDeck'

// import data
import { doctors } from '../../data/persons/doctors'

export function MainDoctorsComponent( ) {

    return (
        <div>
            <CardComponentDeck data={doctors}/>
        </div>
    )
}