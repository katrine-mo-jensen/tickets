export const SignupPage = () => {
    return(
        <section>
            <section>
                <h1>Tilmeld</h1>
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
                        <button type="sumbit">Opret</button>
                        <button><Link to=""/></button>
                    </div>
                </form>
            </section>
        </section>
    )
}