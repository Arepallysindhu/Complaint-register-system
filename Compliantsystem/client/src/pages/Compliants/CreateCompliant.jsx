import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function CreateCompliant() {

    const [formData, setFormData] = useState({ Name: "", email: "", phone: "", description: "" })
    const [user, setUser] = useState({})
    const navigate = useNavigate();

    const onFormFieldChange = (e) => {
        e.preventDefault();
        setFormData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }
    const getUserInfoFromLocalStroage = async () => {
        let user = await localStorage.getItem("loggedInUser") && JSON.parse(localStorage.getItem("loggedInUser"))
        setUser(user)
    }


useEffect(() => {
    getUserInfoFromLocalStroage()

}, [])
const submitCompliant = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/compliant/create", { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify({ ...formData, userId: user._id }) }).then((res) => {
        return res.json()
    }).then((result) => {
        if (result.success) {
            navigate("/list")
        } else {
            alert(result.message)
        }
    })

}
return (
    <div className="container">

        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="col-md-5">
                <div className="card">
                    <div class="card-body">
                        <h5 class="text-center">Register Compliant</h5>
                        <form onSubmit={submitCompliant}>
                            <div class="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" class="form-control" value={formData.Name} onChange={onFormFieldChange} name="Name" />
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Email</label>
                                <input type="text" class="form-control" value={formData.email} onChange={onFormFieldChange} name="email" />
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Phone</label>
                                <input type="text" class="form-control" value={formData.phone} onChange={onFormFieldChange} name="phone" />
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Description</label>
                                <textarea type="text" class="form-control" cols="20" rows="10" style={{ height: '100px' }} value={formData.description} onChange={onFormFieldChange} name="description" />
                            </div>


                            <input type="Submit" className="btn btn-success w-100" value="Submit Compliant" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
)
}



export default CreateCompliant