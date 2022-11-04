export const signUp = async (username,email,password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}createUser`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
        const data = await response.json();
		// console.log(data);
        localStorage.setItem("UserToken", data.token);;
        // console.log(localStorage);
    } catch (error) {
        console.log(error);
    }
}

export const logIn = async (username,email,password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}loginUser`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
        const data = await response.json();
		// console.log(data);
        localStorage.setItem("UserToken", data.token);;
        // console.log(localStorage);
    } catch (error) {
        console.log(error);
    }
}

export const perLogin = async (setUser) => {
    try {
        const token = localStorage.getItem("UserToken");
        const response = await fetch(`${process.env.REACT_APP_REST_API}loginUser`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${token}`
            }
        });
        console.log(response);
        const data = await response.json();
		// console.log("index.js",data.user);
        setUser(data.user);
        localStorage.setItem("UserToken", data.token);;
        // console.log(localStorage);
    } catch (error) {
        console.log(error);
    }
}