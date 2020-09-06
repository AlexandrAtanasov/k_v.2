import { CardDeckComponent } from '../CardDeckComponent'

import { licenses } from '../../data/licenses'


export function MainLicensesComponent( ) {

    return (
        <div 
            style={{
                marginTop: "1.5rem",
            }}
        >
            <CardDeckComponent data={licenses}/>
        </div>
    )
}