import { CardComponentDeck } from '../CardComponents/CardComponentDeck'

// import data
import { licenses } from '../../data/main/licenses/licenses'


export function MainLicensesComponent( ) {

    return (
        <div>
            <CardComponentDeck data={licenses}/>
        </div>
    )
}