const Logout = ({setUser}) => {
    const clickHandler1 = async (event) => {
        localStorage.removeItem("UserToken");
        setUser();
    }
    return(
        <div>
        <button onClick={clickHandler1}>LOGOUT</button>
        </div>
    )
};

export default Logout;