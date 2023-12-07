
import style from "./LoginPage.module.scss"

export const LoginPage = () => {


    return(
        <section>
            <section>
                <h1>Log ind</h1>
                <form>
                    <label>
                        <p>Email:</p>
                        <input type="email" />
                    </label>
                    <label>
                        <p>Password:</p>
                        <input type="password" />
                    </label>
                    <div>
                        <button type="sumbit">Log ind</button>
                        <button><Link to=""/></button>
                    </div>
                </form>
            </section>
        </section>
    )
}