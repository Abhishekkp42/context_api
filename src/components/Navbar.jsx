import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export const Navbar = () => {

	const {user, toggleAuth, isAuth} = useContext(AuthContext)

	const loginUser = () => {
		if(user)
		{
			return toggleAuth();
		}
		else{
			fetch("https://reqres.in/api/login", {
                method: 'POST',
                headers : {"Content-Type": "application/json"} ,
                body: JSON.stringify({
                    "email":"eve.holt@reqres.in",
                    "password":"cityslicka"
                })
            })
            .then(res => res.json())
            .then(data =>{
                isAuth(data.token)
            } )
		}
	}

	return(

        <div>
            {user ? null : <div> <input type="text" placeholder="id"/>

			<input type="password" placeholder="password"/>
			</div>
			}

            <button onClick={()=>loginUser()}>{user ? "LogOut":"LogIn"}</button>
        </div>
        
    )
}