import { CardComponentDeck } from '../CardComponents/CardComponentDeck'

// import data
import { doctors } from '../../data/persons/doctors'

// import styles 
import style from '../../styles/components/main/MainDoctorsComponent.module.scss'


export function MainDoctorsComponent( ) {

    return (
        <div className={` ${style.margin} `} >
            <CardComponentDeck data={doctors}/>
        </div>
    )
}