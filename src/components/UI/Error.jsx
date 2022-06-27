import css from './Error.module.css'
import Card from './Card'

const Error = (props) => {
    return (
        <div className={css.cta}>
            <div className={css.overlay} onClick={props.errorHandle}/>
            <Card className={css.errorCard}>
                <header>
                    <h2>An error has occurred!</h2>
                </header>
                <article>
                    <p>Your task input was empty, please try again.</p>
                </article>
                <button className={css.confirmButton} onClick={props.errorHandle}>GOT IT</button>
            </Card>
        </div>
    )
}
export default Error