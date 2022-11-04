import { useState } from "react";
import { signUp, logIn, perLogin} from "../utils";

const SignOrLog = ({setUser}) => {
    const [username,setUsername] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [logusername,setLogusername] = useState();
    const [logemail,setLogemail] = useState();
    const [logpassword,setLogpassword] = useState();

    const submitHandler1 = async (e) => {
        e.preventDefault();
        await signUp(username,email,password);
        perLogin(setUser);
    }

    const submitHandler2 = async (e) => {
        e.preventDefault();
        await logIn(logusername,logemail,logpassword);
        perLogin(setUser);
    }

    return (
        <div>
        <form onSubmit={submitHandler1}>
            <input onChange={(event) => setUsername(event.target.value)} />
            <input onChange={(event) => setEmail(event.target.value)} />
            <input onChange={(event) => setPassword(event.target.value)} />
            <button type="submit">Sign Up</button>
            <br></br>
        </form>
        <form onSubmit={submitHandler2}>
            <input onChange={(event) => setLogusername(event.target.value)} />
            <input onChange={(event) => setLogemail(event.target.value)} />
            <input onChange={(event) => setLogpassword(event.target.value)} />
            <button type="submit">Login</button>
        </form>
        </div>
    )
}

export default SignOrLog;