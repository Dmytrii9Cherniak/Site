import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Contacts from '../contacts/Contacts';
import infoHeader from '../../media/info_header.png';
import progressPoint from '../../media/progress_point.png';
import '../info_page/InfoPage.scss';

function InfoPage() {

    const [isModalWindowOpened, setIsModalWindowOpened] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const closeFormModalWindow = () => {
        setIsModalWindowOpened(false);
    };

    const validateForm = () => {
        const errors = {};

        if (!inputValues.name.length) {
            errors.name = 'Ім`я повинне бути введене';
        } else if (inputValues.name.length < 2) {
            errors.name = 'Ім`я повинне мати як мінімум 2 символи';
        } else if (/[0-9]/.test(inputValues.name)) {
            errors.name = 'Цифри в імені заборонено';
        }

        if (!inputValues.email.length) {
            errors.email = 'Email повиннен бути введений';
        } else if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,4}$/.test(inputValues.email)) {
            errors.email = 'Неправильний email';
        }

        if (!inputValues.number.length) {
            errors.number = 'Номер повинен бути заповнений';
        } else if (!/^\d{10}$/.test(inputValues.number) && inputValues.number.length < 10) {
            errors.number = 'Неправильний формат';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const submitForm = async () => {
        const formValid = validateForm();

        const objectSend = {
            name: inputValues.name,
            email: inputValues.email,
            number: inputValues.number,
            message: inputValues.message
        }

        if (formValid) {
            // const response = await fetch(`http://localhost:8000/send`, {
            //     method: 'POST',
            //     mode: 'cors',
            //     cache: 'no-cache',
            //     credentials: 'same-origin',
            //     headers: {
            //         'Access-Control-Allow-Origin': '*',
            //         'Access-Control-Allow-Headers': '*',
            //         'Content-Type': 'application/json',
            //     },
            //     redirect: 'follow',
            //     referrerPolicy: 'no-referrer',
            //     body: JSON.stringify(objectSend)
            // });

            inputValues.name = '';
            inputValues.email = '';
            inputValues.number = '';
            inputValues.message = '';
            setIsModalWindowOpened(true);

            setTimeout(() => {
                setIsModalWindowOpened(false);
            }, 6000)

            // return await response.json();
        }
    };

    const inputOnChange = (event) => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
        setErrors({...errors, [name]: false});
    };

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        const formBlock = document.querySelector('.form');

        if (windowWidth >= 560 && windowWidth <= 828) {
            formBlock.style.marginTop = '590px';
        } else if (windowWidth >= 828 && windowWidth <= 1264) {
            formBlock.style.marginTop = '390px';
        }

        return () => window.removeEventListener('resize', handleResize);
    }, [windowWidth]);


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

        <div className={`form_message ${isModalWindowOpened ? 'isModalWindowOpened' : ''}`}>
            <div className="mark_point">
                {Object.keys(errors).length === 0 && (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM14.3 7.61L9.73 13.61C9.63685 13.731 9.51721 13.8291 9.38027 13.8967C9.24333 13.9643 9.09272 13.9996 8.94 14C8.78811 14.0008 8.63803 13.967 8.50115 13.9012C8.36426 13.8353 8.24418 13.7392 8.15 13.62L5.71 10.51C5.62924 10.4063 5.5697 10.2876 5.53479 10.1609C5.49988 10.0341 5.49027 9.90172 5.50652 9.77126C5.52277 9.64079 5.56456 9.5148 5.6295 9.40049C5.69444 9.28617 5.78126 9.18576 5.885 9.105C6.09453 8.94189 6.36026 8.8687 6.62375 8.90152C6.75421 8.91777 6.8802 8.95955 6.99452 9.02449C7.10884 9.08943 7.20924 9.17626 7.29 9.28L8.92 11.36L12.7 6.36C12.7801 6.25494 12.8801 6.16669 12.9943 6.10029C13.1086 6.03388 13.2347 5.99062 13.3657 5.97298C13.4966 5.95534 13.6297 5.96365 13.7574 5.99746C13.8851 6.03126 14.0049 6.08989 14.11 6.17C14.2151 6.25011 14.3033 6.35012 14.3697 6.46433C14.4361 6.57855 14.4794 6.70472 14.497 6.83565C14.5147 6.96658 14.5063 7.0997 14.4725 7.22742C14.4387 7.35514 14.3801 7.47494 14.3 7.58V7.61Z" fill="#008D6A"/>
                </svg>)}
            </div>
            {!errors.name && !errors.email && !errors.number && (
                <p>Your message successfully sent. We will connect with you as soon as possible.</p>
            )}
            <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="close_svg" onClick={closeFormModalWindow}>
                    <path d="M18.295 7.115C18.6844 6.72564 18.6844 6.09436 18.295 5.705C17.9056 5.31564 17.2744 5.31564 16.885 5.705L12 10.59L7.115 5.705C6.72564 5.31564 6.09436 5.31564 5.705 5.705C5.31564 6.09436 5.31564 6.72564 5.705 7.115L10.59 12L5.705 16.885C5.31564 17.2744 5.31564 17.9056 5.705 18.295C6.09436 18.6844 6.72564 18.6844 7.115 18.295L12 13.41L16.885 18.295C17.2744 18.6844 17.9056 18.6844 18.295 18.295C18.6844 17.9056 18.6844 17.2744 18.295 16.885L13.41 12L18.295 7.115Z" fill="#0E1421"/>
                </svg>
            </div>
        </div>

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
                            <rect y="188" width="188" height="2" rx="0.999999" transform="rotate(-90 0 188)" fill="#0E1421" fillOpacity="0.2"/>
                        </svg>
                        <li>
                            <div className="step">
                                <div className="circle"><img src={progressPoint} alt=""/></div>
                                <div className="content">
                                    <h4>Step 1: We’ll call or send a message to you</h4>
                                    <p>To learn about PalettenWerk services, please fill out the contact form and a
                                        member of our team will be in touch soon.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="step">
                                <div className="circle"><img src={progressPoint} alt=""/></div>
                                <div className="content">
                                    <h4>Step 2: We’ll call or send a message to you</h4>
                                    <p>To learn about PalettenWerk services, please fill out the contact form and a
                                        member of our team will be in touch soon.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="step">
                                <div className="circle"><img src={progressPoint} alt=""/></div>
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
                    <input type="text" name="name" placeholder="Your Name" value={inputValues.name} onChange={inputOnChange} />
                    {errors.name && <p className="error"> {errors.name} </p>}
                </label>
                <label>
                    <h4> Email </h4>
                    <input type="email" name="email" value={inputValues.email} placeholder="email@email.com" onChange={inputOnChange} />
                    {errors.email && <p className="error">{errors.email}</p>}
                </label>
                <label>
                    <h4> Phone number </h4>
                    <input type="number" name="number" value={inputValues.number} placeholder="Your number" onChange={inputOnChange} />
                    {errors.number && <p className="error">{errors.number}</p>}
                </label>
                <label>
                    <h4> Message </h4>
                    <textarea placeholder="Your message" value={inputValues.message} name="message" onChange={inputOnChange}></textarea>
                    {!errors.message && <p className="error">{errors.checkbox}</p>}
                </label>
                <div className="button">
                    <button onClick={submitForm}> Submit </button>
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