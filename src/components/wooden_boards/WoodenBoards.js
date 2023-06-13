import React from 'react';
import woodenPhoto from '../../media/wooden.header.png';
import photoSlider1 from '../../media/cube.png';
import photoSlider2 from '../../media/slider2.png';
import photoSlider3 from'../../media/small.png';
import GreenTruckContactInfo from '../greenTruckContactInfo/GreenTruckContactInfo';
import { Link } from 'react-router-dom';
import '../wooden_boards/WoodenBoards.scss';

function WoodenBoards() {

    return (<div>

        <header className="boards_header">
            <div className="boards_photo">
                <img src={woodenPhoto} alt=""/>
            </div>
            <div className="boards_photo_content">
                <h4> Wooden pallets </h4>
                <article>
                    <div> <Link to="/home"> Home </Link> </div>
                    <div> / </div>
                    <div> <p> Boards </p> </div>
                </article>
            </div>
        </header>

        <main className="boards_content">
            <div className="images_content">
                <div className="img">
                    <img src={photoSlider1} alt=""/>
                </div>
                <div className="img">
                    <img src={photoSlider2} alt=""/>
                </div>
                <div className="img">
                    <img src={photoSlider3} alt=""/>
                </div>
            </div>
            <div className="text_content">
                <header>
                    <h4> Our services </h4>
                    <h3> Pallet board </h3>
                </header>
                <div className="text_info">
                    <p> PalettenWerk offers services in the design and production of special-purpose pallets, including
                        large pallets, wooden platforms for transporting machinery or household appliances, and pallets
                        that meet special conditions in terms of structural strength, load securing systems, and any
                        other details of the manufacture of individual pallet components.
                        PalettenWerk offers services in the design and production of special-purpose pallets, including
                        large pallets, wooden platforms for transporting machinery or household appliances, and pallets
                        that meet special conditions in terms of structural strength, load securing systems, and any
                        other details of the manufacture of individual pallet components.
                    </p>
                </div>
                <footer className="characteristic_list">
                    <p> Довжина: 1200 мм </p>
                    <p> Ширина: 1000 мм </p>
                    <p> Висота: 144 мм </p>
                    <p> Навантаження: 1500 кг </p>
                    <p> Максимальне навантаження при складуванні: 4000 кг </p>
                    <p> Стандарт: UIC 435-5 </p>
                    <p> Ліцензія: UA-004 </p>
                    <p> Ліцензія: UA-004 </p>
                    <p> Вологість: 18-22% </p>
                    <p> Термообробка: ІРРС ISPM 15 </p>
                    <p> Маркування: EPAL, IPPC, EPAL-3, контрольна скоба </p>
                </footer>
            </div>
        </main>
        <GreenTruckContactInfo />
    </div>);
}

export default WoodenBoards;