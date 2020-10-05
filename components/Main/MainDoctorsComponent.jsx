import { CardComponentDeck } from '../CardComponents/CardComponentDeck'

// import data
import { doctors } from '../../data/pages/persons/doctors'

export function MainDoctorsComponent( ) {

    return (
        <div>
            <CardComponentDeck data={doctors}/>
        </div>
    )
}