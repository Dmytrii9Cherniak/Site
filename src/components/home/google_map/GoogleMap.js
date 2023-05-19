import React from 'react';
import '../google_map/GoogleMap.scss';

function GoogleMap() {

    return (
        <div className="google_map">
            <h6> Contact Us </h6>
            <h4> Customised production plans </h4>
            <p> PalettenWerk offers services in the design and production, including large pallets,
                platforms for transporting. </p>
            <div className="map_info">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3510.0865901784077!2d24.02859087296597!3d49.837825641728514!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add64f46130af%3A0xb8fa7f852817fcdc!2z0JTQstC-0YDQtdGGINCf0L7RgtC-0YbQutC40YU!5e0!3m2!1sru!2sua!4v1683615861353!5m2!1sru!2sua"
                    width="600" height="450" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>);
}

export default GoogleMap;