import { useContext } from "react";
import { AuthContext } from "../firebase/FirebaeProvide";


const UseAuth = () => {
    const all=useContext(AuthContext)
    return all
};

export default UseAuth;