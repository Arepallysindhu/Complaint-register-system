import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup() {

    const [formData, setFormData] = useState({ Name: "", email: "", phone: "", password: "",role:""})
    const navigate = useNavigate();

    const onFormFieldChange = (e) => {
        e.preventDefault();
        setFormData((prevState) => {
            return {
                ...prevState,
                [e.target.name]:e.target.value
            }
        })
    }
    const signup = (e)=>{
        e.preventDefault();
        fetch("http://localhost:5000/auth/signup",{method:"POST",headers:{'Content-Type':"application/json"},body:JSON.stringify(formData)}).then((res)=>{
            return res.json()
        }).then((result)=>{
            if(result.success){
                navigate("/login")
            }else{
                alert(result.message)
            }
        })

    }
    return (
        <div className="container">
            
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh'}}>
                    <div className="col-md-5">
                        <div className="card">
                            <div class="card-body">
                                <h5 class="text-center">Signup</h5>
                                <form onSubmit={signup}>
                                    <div class="mb-3">
                                        <label className="form-label">Name</label>
                                        <input type="text" class="form-control" value={formData.Name} onChange={onFormFieldChange} name="Name"/>
                                    </div>
                                    <div class="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="text" class="form-control" value={formData.email} onChange={onFormFieldChange} name="email"/>
                                    </div>
                                    <div class="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="text" class="form-control" value={formData.password} onChange={onFormFieldChange} name="password"/>
                                    </div>
                                    <div class="mb-3">
                                        <label className="form-label">Phone</label>
                                        <input type="text" class="form-control" value={formData.phone} onChange={onFormFieldChange} name="phone"/>
                                    </div>
                                    <div class="mb-3">
                                        <label className="form-label">Role</label>
                                        <select
                                            class="form-control"
                                            value={formData.role} onChange={onFormFieldChange} name="role"
                                        >
                                            <option value="select">Select</option>
                                            <option value="user">User</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                    </div>

                                    <input type="submit" className="btn btn-success w-100" value="Signup" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}



export default Signup