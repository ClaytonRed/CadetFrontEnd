import CadetLogo from '../../Assets/img/logo-with-bg.png';
import { Navbar } from "react-bootstrap"

function Logo() {
    return (
        <Navbar.Brand>
            <img src={CadetLogo} alt="cadet logo" className='navbar-brand'/>
        </Navbar.Brand>
    )
}

export default Logo;