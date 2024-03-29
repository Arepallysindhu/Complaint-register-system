import {Link} from "react-router-dom"

function HeaderBar(){
    return(
        <nav className="navbar navbar-expand" style={{background:'#198754'}}>
            <div className="container-fluid">
                <Link class="navbar-brand" to="/">Complaint Register System</Link>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="create-compliant">CreateCompliant</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="list">Compliants</Link>
                        </li>
                    </ul>
                </div>
            </div>


        </nav>
    )
}

export default HeaderBar