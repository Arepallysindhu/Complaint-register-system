import { Outlet } from "react-router-dom"
import HeaderBar from "../HeaderBar"
import { useEffect, useState } from "react"

function CompliantList() {
    const [compliants, setCompliants] = useState([])
    const [user, setUser] = useState({})
    const getUserInfoFromLocalStorage = async () => {
        let user = await localStorage.getItem("loggedInUser") && JSON.parse(localStorage.getItem("loggedInUser"))
        setUser(user)
    }

    useEffect(() => {
        getUserInfoFromLocalStorage()
    }, [])

    useEffect(() => {
        fetch(`https://localhost:7000/compliant/list/${user._id}`).then((res) => {
            return res.json()
        }).then((result) => {
            if (result.success) {
                setCompliants(result.compliants)
            } else {
                alert(result.message)
            }
        })

    }, [user])



    return (
        <div className="Container">
            <div className="table">
                <table class="table table-bordered" >
                    <thead class="table-success">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {compliants.map((item, key) => {
                            return(

                                <tr key={key}>
                                    <td>{item.Name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.description}</td>
                                </tr>
                            )

                        })}
                    </tbody>
                </table>
            </div>

        </div>

    )
}


export default CompliantList
