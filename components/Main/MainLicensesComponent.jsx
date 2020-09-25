import { CardComponentDeck } from '../CardComponents/CardComponentDeck'

// import data
import { licenses } from '../../data/licenses'


export function MainLicensesComponent( ) {

    return (
        <div 
            style={{
                marginTop: "1.5rem",
            }}
        >
            <CardComponentDeck data={licenses}/>
        </div>
    )
}