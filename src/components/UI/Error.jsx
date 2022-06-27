import css from './Error.module.css'
import Card from './Card'

const Error = (props) => {
    return (
        <div className={css.cta}>
            <div className={css.overlay} />
        <Card className={css.errorCard}>
            <header>
        <p>An error has occured!</p>
            </header>
        </Card>
        </div>
    )
}
export default Error