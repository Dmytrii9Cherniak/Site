import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../media/logo.png';
import '../footer/Footer.scss';

function Footer() {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo( 0, 0 )
    },[location.pathname])

    return (<footer className="footer" id="contacts">
                <div className="footer_left_part">
                    <img src={logo} alt="logo"/>
                        <p>
                            PalettenWerk offers services in the design and production, including large pallets, platforms for
                            transporting.
                        </p>
                </div>
                <div className="footer_center_part">
                    <div><Link to="/"> Home </Link></div>
                    <div><Link to="/services"> Pallets </Link></div>
                    <div><Link to="/boards"> Boards </Link></div>
                    <div><Link to="/footer"> Info </Link></div>
                </div>
                <div className="footer_right_part">
                    <h4> Quick Contact </h4>
                    <p> If you have any questions or need help, feel free to contact with our team </p>
                    <h5> +48 604 592 700 </h5>
                    <p> 105 Shota Rustaveli St., Kyiv, Ukraine, 01001 </p>
                </div>
            </footer>);
}

export default Footer;