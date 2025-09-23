import { FiUser } from "react-icons/fi";




function ViewProfile() {
    return (
        <>
           
            <div className='viewprofile-container'>
                <FiUser className='viewprofile-icon' />
                <h3 className="view">View Profile</h3>
            </div>
        </>
    )
}

export default ViewProfile;