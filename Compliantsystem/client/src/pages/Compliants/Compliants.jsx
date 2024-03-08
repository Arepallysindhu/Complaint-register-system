import {Outlet} from "react-router-dom"
import HeaderBar from "../HeaderBar"


function Compliants(){
    return(
        <div className="Container-fluid">
            <HeaderBar/>
            <Outlet/>
        </div>
    )
}
export default Compliants