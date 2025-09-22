import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Link } from 'react-router-dom';



function Dashboard() {
    return (
        <div className='dashboard'>
            <MdOutlineDashboardCustomize className='dashboard-icon' />
            <h3>Dashboard</h3>
        </div>
    )
}

export default Dashboard;