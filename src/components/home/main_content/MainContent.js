import React from 'react';
import palletsContent from '../../../media/pallets_content.png';
import '../main_content/MainContent.scss';

function MainContent() {
    return (
        <div className="main_content" id="aboutUs">
            <div className="main_wrapper">

                <header className="main_header">
                    <div className="main_header_img">
                        <img src={palletsContent} alt="main_header_img" />
                    </div>
                    <div className="main_header_content">
                        <div className="main_header_top_content">
                            <h6> About us </h6>
                            <h4> Customised production plans </h4>
                            <p> PalettenWerk offers services in the design and production of special-purpose pallets,
                                including
                                large pallets, wooden platforms for transporting machinery or household appliances, and
                                pallets
                                that meet special conditions in terms of structural strength, load securing systems, and
                                any
                                other details of the manufacture of individual pallet components.
                            </p>
                        </div>
                        <div className="main_header_bottom_content">
                            <div>
                                <main>
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="4" cy="4" r="4" fill="#008D6A"/>
                                    </svg>
                                    <h4> Quality </h4>
                                </main>
                                <p> PalettenWerk offers services in the design and production, including large pallets,
                                    platforms for transporting.
                                </p>
                            </div>
                            <div>
                                <main>
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="4" cy="4" r="4" fill="#008D6A"/>
                                    </svg>
                                    <h4> Quality </h4>
                                </main>
                                <p> PalettenWerk offers services in the design and production, including large pallets,
                                    platforms for transporting.
                                </p>
                            </div>
                        </div>

                    </div>
                </header>

                <main className="main_footer_content_block">
                    <div className="main_footer_content_block_left_info">
                        <h4> Our mission </h4>
                        <p>
                            PalettenWerk offers services in the design and production of special-purpose pallets,
                            including
                            large pallets, wooden platforms for transporting machinery or household appliances, and
                            pallets that
                            meet special conditions in terms of structural strength, load securing systems, and any
                            other
                            details of the manufacture of individual pallet components.
                        </p>
                    </div>
                    <div className="main_footer_content_block_right_info">
                        <h4> Our values </h4>
                        <div className="mark_content">
                            <main>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.00017 0.333374C5.68162 0.333374 4.39269 0.724367 3.29636 1.45691C2.20004 2.18945 1.34555 3.23064 0.840969 4.44882C0.336385 5.66699 0.204362 7.00744 0.461597 8.30064C0.718832 9.59385 1.35377 10.7817 2.28612 11.7141C3.21847 12.6464 4.40636 13.2814 5.69956 13.5386C6.99277 13.7958 8.33322 13.6638 9.55139 13.1592C10.7696 12.6547 11.8108 11.8002 12.5433 10.7038C13.2758 9.60751 13.6668 8.31858 13.6668 7.00004C13.6668 6.12456 13.4944 5.25766 13.1594 4.44882C12.8243 3.63998 12.3333 2.90505 11.7142 2.286C11.0952 1.66694 10.3602 1.17588 9.55139 0.840844C8.74255 0.505812 7.87565 0.333374 7.00017 0.333374ZM9.86683 5.40671L6.82017 9.40671C6.75806 9.48738 6.6783 9.55276 6.58701 9.59783C6.49572 9.6429 6.39531 9.66646 6.2935 9.66671C6.19224 9.66725 6.09218 9.64472 6.00093 9.60083C5.90967 9.55693 5.82961 9.49283 5.76683 9.41337L4.14017 7.34004C4.08632 7.27088 4.04663 7.19179 4.02336 7.10728C4.00008 7.02278 3.99368 6.93452 4.00451 6.84755C4.01534 6.76057 4.0432 6.67658 4.0865 6.60036C4.12979 6.52415 4.18767 6.45722 4.25683 6.40337C4.39651 6.29464 4.57367 6.24584 4.74933 6.26772C4.83631 6.27855 4.9203 6.30641 4.99651 6.3497C5.07272 6.393 5.13966 6.45088 5.1935 6.52004L6.28017 7.90671L8.80017 4.57337C8.85357 4.50334 8.92025 4.4445 8.99639 4.40023C9.07253 4.35596 9.15665 4.32712 9.24393 4.31536C9.33122 4.3036 9.41997 4.30914 9.50511 4.33168C9.59026 4.35422 9.67013 4.3933 9.74017 4.44671C9.8102 4.50011 9.86904 4.56679 9.91331 4.64293C9.95758 4.71907 9.98642 4.80319 9.99818 4.89047C10.0099 4.97776 10.0044 5.06651 9.98186 5.15165C9.95932 5.2368 9.92024 5.31667 9.86683 5.38671V5.40671Z" fill="white"/>
                                </svg>
                            </main>
                            <p>
                                PalettenWerk offers services in the design and production, including large pallets, platforms for transporting.
                            </p>
                        </div>
                        <div className="mark_content">
                            <main>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.00017 0.333374C5.68162 0.333374 4.39269 0.724367 3.29636 1.45691C2.20004 2.18945 1.34555 3.23064 0.840969 4.44882C0.336385 5.66699 0.204362 7.00744 0.461597 8.30064C0.718832 9.59385 1.35377 10.7817 2.28612 11.7141C3.21847 12.6464 4.40636 13.2814 5.69956 13.5386C6.99277 13.7958 8.33322 13.6638 9.55139 13.1592C10.7696 12.6547 11.8108 11.8002 12.5433 10.7038C13.2758 9.60751 13.6668 8.31858 13.6668 7.00004C13.6668 6.12456 13.4944 5.25766 13.1594 4.44882C12.8243 3.63998 12.3333 2.90505 11.7142 2.286C11.0952 1.66694 10.3602 1.17588 9.55139 0.840844C8.74255 0.505812 7.87565 0.333374 7.00017 0.333374ZM9.86683 5.40671L6.82017 9.40671C6.75806 9.48738 6.6783 9.55276 6.58701 9.59783C6.49572 9.6429 6.39531 9.66646 6.2935 9.66671C6.19224 9.66725 6.09218 9.64472 6.00093 9.60083C5.90967 9.55693 5.82961 9.49283 5.76683 9.41337L4.14017 7.34004C4.08632 7.27088 4.04663 7.19179 4.02336 7.10728C4.00008 7.02278 3.99368 6.93452 4.00451 6.84755C4.01534 6.76057 4.0432 6.67658 4.0865 6.60036C4.12979 6.52415 4.18767 6.45722 4.25683 6.40337C4.39651 6.29464 4.57367 6.24584 4.74933 6.26772C4.83631 6.27855 4.9203 6.30641 4.99651 6.3497C5.07272 6.393 5.13966 6.45088 5.1935 6.52004L6.28017 7.90671L8.80017 4.57337C8.85357 4.50334 8.92025 4.4445 8.99639 4.40023C9.07253 4.35596 9.15665 4.32712 9.24393 4.31536C9.33122 4.3036 9.41997 4.30914 9.50511 4.33168C9.59026 4.35422 9.67013 4.3933 9.74017 4.44671C9.8102 4.50011 9.86904 4.56679 9.91331 4.64293C9.95758 4.71907 9.98642 4.80319 9.99818 4.89047C10.0099 4.97776 10.0044 5.06651 9.98186 5.15165C9.95932 5.2368 9.92024 5.31667 9.86683 5.38671V5.40671Z" fill="white"/>
                                </svg>
                            </main>
                            <p>
                                PalettenWerk offers services, platforms for transporting.
                            </p>
                        </div>
                        <div className="mark_content">
                            <main>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.00017 0.333374C5.68162 0.333374 4.39269 0.724367 3.29636 1.45691C2.20004 2.18945 1.34555 3.23064 0.840969 4.44882C0.336385 5.66699 0.204362 7.00744 0.461597 8.30064C0.718832 9.59385 1.35377 10.7817 2.28612 11.7141C3.21847 12.6464 4.40636 13.2814 5.69956 13.5386C6.99277 13.7958 8.33322 13.6638 9.55139 13.1592C10.7696 12.6547 11.8108 11.8002 12.5433 10.7038C13.2758 9.60751 13.6668 8.31858 13.6668 7.00004C13.6668 6.12456 13.4944 5.25766 13.1594 4.44882C12.8243 3.63998 12.3333 2.90505 11.7142 2.286C11.0952 1.66694 10.3602 1.17588 9.55139 0.840844C8.74255 0.505812 7.87565 0.333374 7.00017 0.333374ZM9.86683 5.40671L6.82017 9.40671C6.75806 9.48738 6.6783 9.55276 6.58701 9.59783C6.49572 9.6429 6.39531 9.66646 6.2935 9.66671C6.19224 9.66725 6.09218 9.64472 6.00093 9.60083C5.90967 9.55693 5.82961 9.49283 5.76683 9.41337L4.14017 7.34004C4.08632 7.27088 4.04663 7.19179 4.02336 7.10728C4.00008 7.02278 3.99368 6.93452 4.00451 6.84755C4.01534 6.76057 4.0432 6.67658 4.0865 6.60036C4.12979 6.52415 4.18767 6.45722 4.25683 6.40337C4.39651 6.29464 4.57367 6.24584 4.74933 6.26772C4.83631 6.27855 4.9203 6.30641 4.99651 6.3497C5.07272 6.393 5.13966 6.45088 5.1935 6.52004L6.28017 7.90671L8.80017 4.57337C8.85357 4.50334 8.92025 4.4445 8.99639 4.40023C9.07253 4.35596 9.15665 4.32712 9.24393 4.31536C9.33122 4.3036 9.41997 4.30914 9.50511 4.33168C9.59026 4.35422 9.67013 4.3933 9.74017 4.44671C9.8102 4.50011 9.86904 4.56679 9.91331 4.64293C9.95758 4.71907 9.98642 4.80319 9.99818 4.89047C10.0099 4.97776 10.0044 5.06651 9.98186 5.15165C9.95932 5.2368 9.92024 5.31667 9.86683 5.38671V5.40671Z" fill="white"/>
                                </svg>
                            </main>
                            <p>
                                PalettenWerk offers services in the design and production, including large pallets, platforms for transporting.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default MainContent;