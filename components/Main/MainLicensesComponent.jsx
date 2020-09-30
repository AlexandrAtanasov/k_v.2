import { CardComponentDeck } from '../CardComponents/CardComponentDeck'

// import data
import { licenses } from '../../data/licenses'


export function MainLicensesComponent( ) {

    return (
        <div>
            <CardComponentDeck data={licenses}/>
        </div>
    )
}