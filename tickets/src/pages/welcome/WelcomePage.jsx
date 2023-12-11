import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../components/context/userContext" 

export const WelcomePage = () => {
    const {user} = useContext(UserContext)
    return(
        <section>
            {user ? <p>Velkommen </p> : <p>Du er ikke logget ind</p>}
        </section>
    )
}