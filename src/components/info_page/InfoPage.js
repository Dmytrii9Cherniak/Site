import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Contacts from '../contacts/Contacts';
import infoHeader from '../../media/info_header.png';
import progressPoint from '../../media/progress_point.png';
import '../info_page/InfoPage.scss';

function InfoPage() {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };


    return (<div className="info_page">

        <header className="info_header">
            <div className="info_photo">
                <img src={infoHeader} alt=""/>
            </div>
            <div className="info_photo_content">
                <h4> Contacts </h4>
                <article>
                    <div><Link to="/home"> Home </Link></div>
                    <div> /</div>
                    <div><p> Contacts </p></div>
                </article>
            </div>
        </header>

        <main className="header_blocks">
            <div>
                <header>
                    <svg width="56" height="1" viewBox="0 0 56 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line opacity="0.35" y1="0.5" x2="56" y2="0.5" stroke="white"/>
                    </svg>
                    <h4> Our office </h4>
                    <p> Offers services in the design and production </p>
                </header>
                <h6> 105 Shota Rustaveli St., Kyiv, Ukraine, 01001 </h6>
            </div>
            <div>
                <header>
                    <svg width="56" height="1" viewBox="0 0 56 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line opacity="0.35" y1="0.5" x2="56" y2="0.5" stroke="#0E1421"/>
                    </svg>
                    <h4> Email us </h4>
                    <p> Offers services in the design and production. </p>
                </header>
                <h6> email@email.com </h6>
            </div>
            <div>
                <header>
                    <svg width="56" height="1" viewBox="0 0 56 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line opacity="0.35" y1="0.5" x2="56" y2="0.5" stroke="white"/>
                    </svg>
                    <h4> Call us </h4>
                    <p> 105 Shota Rustaveli St., Kyiv, Ukraine, 01001 </p>
                </header>

                <h6> +48 604 592 700 </h6>
            </div>
        </main>

        <main className="form">
            <div className="left_form_content">
                <h6> Contacts </h6>
                <h4> How can we help you? </h4>
                <h2> To learn about PalettenWerk services, please fill out the contact form and a member of our team
                    will be
                    in touch soon. </h2>

                <div className="contact_steps">
                    <h5>What will be the next step?</h5>
                    <ul>
                        <svg viewBox="0 0 2 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="188" width="188" height="2" rx="0.999999" transform="rotate(-90 0 188)" fill="white"/>
                            <rect y="188" width="188" height="2" rx="0.999999" transform="rotate(-90 0 188)" fill="#0E1421" fill-opacity="0.2"/>
                        </svg>
                        <li>
                            <div className="step">
                                <div className="circle"><img src={progressPoint}/></div>
                                <div className="content">
                                    <h4>Step 1: We’ll call or send a message to you</h4>
                                    <p>To learn about PalettenWerk services, please fill out the contact form and a
                                        member of our team will be in touch soon.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="step">
                                <div className="circle"><img src={progressPoint}/></div>
                                <div className="content">
                                    <h4>Step 2: We’ll call or send a message to you</h4>
                                    <p>To learn about PalettenWerk services, please fill out the contact form and a
                                        member of our team will be in touch soon.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="step">
                                <div className="circle"><img src={progressPoint}/></div>
                                <div className="content">
                                    <h4>Step 3: We’ll call or send a message to you</h4>
                                    <p>To learn about PalettenWerk services, please fill out the contact form and a
                                        member of our team will be in touch soon.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="right_form">
                <label>
                    <h4> Name </h4>
                    <input type="text" placeholder="Your Name"/>
                </label>
                <label>
                    <h4> Email </h4>
                    <input type="text" placeholder="email@email.com"/>
                </label>
                <label>
                    <h4> Phone number </h4>
                    <input type="text" placeholder="+380"/>
                </label>
                <label>
                    <h4> Message </h4>
                    <textarea placeholder="Your message"></textarea>
                </label>
                <div className="checkbox">
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
                    <h4> By submitting the form, I accept the <Link> Terms of Agreement </Link></h4>
                </div>
                <div className="button">
                    <button> Submit</button>
                </div>
            </div>
        </main>

        <footer>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3510.0865901784077!2d24.02859087296597!3d49.837825641728514!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add64f46130af%3A0xb8fa7f852817fcdc!2z0JTQstC-0YDQtdGGINCf0L7RgtC-0YbQutC40YU!5e0!3m2!1sru!2sua!4v1683615861353!5m2!1sru!2sua"
                width="600" height="450" allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </footer>
        <Contacts/>

    </div>);
}

export default InfoPage;