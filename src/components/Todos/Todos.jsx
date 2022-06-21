import Card from "../UI/Card";
import css from './Todos.module.css'

const Todos = (props) => {
    return (
        <Card>
            {/*<div className={css.wrapper}>*/}
                <ul>
                    {props.items.map(item =>(
                        <li key={item.id}>{item.name}<button>remove</button></li>
                    ))}
                </ul>
            {/*</div>*/}
        </Card>
    )
}

export default Todos