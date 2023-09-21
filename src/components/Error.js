import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();

    return(
        <div>
            <h1>oops!!!</h1>
            <h2>Error,page not found</h2>
            <h3>{err.status}:{err.statusText} </h3>
        </div>
    )
};

export default Error;