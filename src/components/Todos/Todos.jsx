import Card from "../UI/Card";
import css from './Todos.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/fontawesome-free-solid'


const Todos = (props) => {
    return (
        <Card className={props.items.length === 0 && css.todoCard}>

            <ul>
                {props.items.map(item => (
                    <li className={item.priority === '3' ? css.low
                        : item.priority === '2' ? css.moderate
                            : css.high} key={item.id} >{item.name}
                        <button><FontAwesomeIcon icon={faTrash}/></button>
                    </li>
                )).sort(function(a, b) {
                    return a.priority < b.priority;})}
            </ul>

        </Card>
    )
}

export default Todos