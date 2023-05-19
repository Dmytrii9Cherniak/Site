import React from 'react';
import content_map from '../../../media/content.map.png';
import poland from '../../../media/poland.png'
import italy from '../../../media/italy.png';
import germany from '../../../media/germany.png';
import france from '../../../media/france.png';
import united_kingdom from '../../../media/united_kingdom.png';
import bulgaria from '../../../media/bulgaria.png';
import certificate from '../../../media/certificate.png';
import '../certificates/Certificates.scss';

function Certificates() {
    return (

        <main className="map_and_certificates_info">
            <header>

                <div className="map">
                    <img src={content_map} alt="map" />
                </div>
                <div className="map_info_right_block">
                    <h6> Our network </h6>
                    <h4> The PalettenWork is Ukrainian company </h4>
                    <p> PalettenWerk offers services in the design and production of special-purpose pallets, including
                        large
                        pallets, wooden platforms for transporting machinery or household appliances, and pallets that
                        meet
                        special
                        conditions in terms of structural strength, load securing systems, and any other details of the
                        manufacture
                        of individual pallet components. </p>
                    <h5> We deliver our products to 6 countries: </h5>
                    <ul>
                        <li><img src={poland} alt="Poland" /> Poland </li>
                        <li><img src={italy} alt="Italy" /> Italy </li>
                        <li><img src={germany} alt="Germany" /> Germany </li>
                        <li><img src={france} alt="France" /> France </li>
                        <li><img src={united_kingdom} alt="United Kingdom" /> United Kingdom </li>
                        <li><img src={bulgaria} alt="Bulgaria" /> Bulgaria </li>
                    </ul>
                </div>
            </header>

            <div className="certificates">
                <h6> Our products </h6>
                <h4> Quality certificates </h4>
                <main>
                    <div className="certificate">
                        <img src={certificate} alt="certificate" />
                        <article>
                            <h5> ISO 9001:2015 quality certificate </h5>
                            <p> We have held an ISO quality certificate since 2005. The procedures and instructions
                                we have
                                developed optimise all the processes carried out in the company, from the supply of
                                raw
                                materials to
                                production and sales. These processes are adapted to the specific nature of our
                                industry. The
                                annual
                                audits for this certification prove that our procedures and instructions comply with
                                ISO
                                practices. </p>
                        </article>
                    </div>
                    <div className="certificate">
                        <img src={certificate} alt="certificate" />
                        <article>
                            <h5> ISO 9001:2015 quality certificate </h5>
                            <p> We have held an ISO quality certificate since 2005. The procedures and instructions
                                we have
                                developed optimise all the processes carried out in the company, from the supply of
                                raw
                                materials to
                                production and sales. These processes are adapted to the specific nature of our
                                industry. The
                                annual
                                audits for this certification prove that our procedures and instructions comply with
                                ISO
                                practices. </p>
                        </article>
                    </div>
                </main>
            </div>
        </main>
    );
}

export default Certificates;