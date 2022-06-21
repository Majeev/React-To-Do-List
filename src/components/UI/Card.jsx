import css from './Card.module.css'

const Card = (props) => {
    return (
        <div className={`${css.card} ${props.className}`}>{props.children}</div>
    )
}

export default Card