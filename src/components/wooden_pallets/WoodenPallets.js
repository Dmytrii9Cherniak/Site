import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import woodenPhoto from '../../media/wooden.header.png';
import firstWooden from '../../media/first_wooden.png';
import secondWooden from '../../media/second_wooden.png';
import GreenTruckContactInfo from '../greenTruckContactInfo/GreenTruckContactInfo';
import '../wooden_pallets/WoodenPallets.scss';

function WoodenPallets() {

    useEffect(() => {
        document.title = 'Wooden'
    }, [])

    return (
        <div>
            <header className="wooden_header">
                <div className="wooden_photo">
                    <img src={woodenPhoto} alt=""/>
                </div>
                <div className="wooden_photo_content">
                    <h4> Wooden pallets </h4>
                    <article>
                        <div> <Link to="/home"> Home </Link> </div>
                        <div> / </div>
                        <div> <p> Wooden Pallets </p> </div>
                    </article>
                </div>
            </header>

            <main className="wooden_content">

                <div className="wooden_item">
                        <div className="item_header">
                            <h4> Європіддон EPAL </h4>
                            <p> PalettenWerk offers services in the design and production of special-purpose pallets,
                                including large pallets. </p>
                        </div>
                        <div className="item_characteristics">
                            <img src={firstWooden} alt=""/>
                            <div className="characteristic_list">
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
                            </div>
                        </div>
                </div>

                <div className="wooden_item">
                    <div className="item_header">
                        <h4> Піддон дерев'яний IPPC </h4>
                        <p> PalettenWerk offers services in the design and production of special-purpose pallets,
                            including large pallets. </p>
                    </div>
                    <div className="item_characteristics">
                        <img src={secondWooden} alt=""/>
                        <div className="characteristic_list">
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
                        </div>
                    </div>
                </div>

            </main>

            <GreenTruckContactInfo />

        </div>
    );
}

export default WoodenPallets;