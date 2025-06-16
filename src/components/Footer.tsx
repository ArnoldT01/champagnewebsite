import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <h1 className='footer-heading-text'>Celebrate</h1>

            <div className='middle'>
                <div className='first'>
                    <p className='footer-heading'>Newsletter and stay in touch with Lorem Ipsum</p>
                    <input type="email" placeholder='EMAIL' className='email-input'/>
                    <button className='subscribe-btn'>Subscribe</button>
                    <div className="socials">
                        <img src="/envelope-regular.svg" className='icon' alt="envelope icon" />
                        <img src="/instagram-brands.svg" className='icon' alt="instagram icon" />
                        <img src="/whatsapp-brands.svg" className='icon' alt="whatsapp icon" />
                        <img src="/dribbble-brands.svg" className='icon' alt="dribbble icon" />
                    </div>
                </div>

                <div className='second'>
                    <div className="information">
                        <p className="footer-heading">Information</p>
                        <a href="#">Outlet</a>
                        <a href="#">Shop</a>
                        <a href="#">Project</a>
                    </div>

                    <div className="shipping">
                        <p className="footer-heading">Shipping</p>
                        <a href="#">Returns</a>
                        <a href="#">Shop</a>
                        <a href="#">Legacy</a>
                    </div>

                    <div className="contact">
                        <p className="footer-heading">Contact</p>
                        <a href="#">Email</a>
                        <a href="#">Store</a>
                        <a href="#">Faq</a>
                    </div>
                </div>
            </div>

            <p className='copyright'>&copy; 2025 <a href="https://github.com/arnoldt01" target='_blank'>Arnold Mavhunga</a>. All rights reserved</p>
        </div>
    )
}

export default Footer