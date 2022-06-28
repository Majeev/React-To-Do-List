import Card from "../UI/Card";
import css from './Todos.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/fontawesome-free-solid'


const Todos = (props) => {
    const sortedTasks = props.items.sort((a, b) => (a.priority > b.priority) ? 1 : -1)

    return (
        <Card className={props.items.length === 0 && css.todoCard}>

            <ul>
                {sortedTasks.map(item => (
                    <li className={item.priority === '3' ? css.low
                        : item.priority === '2' ? css.moderate
                            : css.high} key={item.id} >{item.name}
                        <button className={css.deleteButton} onClick={props.onClick(item)}><FontAwesomeIcon icon={faTrash}/></button>
                    </li>
                ))}
            </ul>

        </Card>
    )
}

export default Todos