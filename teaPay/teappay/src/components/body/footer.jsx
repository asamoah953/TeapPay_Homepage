import { Link } from 'react-router-dom';
import { MdOutlineArrowDropUp } from "react-icons/md";


function Footer() {
    return (
        <footer class="footer">
            <h3 className="copyright">Copyright &#64; 2025 <Link to={""}> Pay Money</Link> | All Rights Reserved</h3>
            <div className='language-container'><h4 className='languages'>English</h4> <MdOutlineArrowDropUp className='viewup'/></div>
        </footer>
    )
}


export default Footer;