import { CiLogin } from "react-icons/ci";




function Logout() {
    return (
        <>
           
            <div className='logout-container'>
                <CiLogin className='logout-icon' />
                <h3 className="logout">Logout</h3>
            </div>
        </>
    )
}

export default Logout;