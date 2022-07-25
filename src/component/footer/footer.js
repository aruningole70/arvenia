import '../../App.css';
import instagram from '../../assects/instagram.svg';
import facebook from '../../assects/facebook.svg';
import twitter from '../../assects/twitter.svg';
import logo from '../../assects/logo.png';

function Footer() {
    return (
        <div className='demo-GridRowExample-markup'>
            <div className='aem-Grid aem-Grid--default--12 aem-Grid--tablet--6 aem-Grid--phone--1 demo-Grid footer-item '>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn demo-GridColumn--image'>
                <h3></h3>
                <h4>Account</h4>
                    <ul>
                        <li>Sign In</li>
                        <li>Register</li>
                        <li>Order Status</li>
                    </ul>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn demo-GridColumn--image'>
                <h4>About Us</h4>
                    <ul>                       
                        <li>Our Story</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn demo-GridColumn--image'>
                <h4>Help</h4>
                    <ul>                     
                        <li>Contact Us</li>
                        <li>Order Status</li>
                        <li>Returns</li>
                    </ul>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn demo-GridColumn--image'>
                    <h4>Follow Us!</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div className='footer-icon'>
                        <ul>
                            <li><img src={instagram} alt="jion us with instagram" /></li>
                            <li><img src={facebook} alt="jion us with facebook" /></li>
                            <li><img src={twitter} alt="jion us with twitter" /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className='demo-GridRowExample-markup'>
                <div className='aem-Grid aem-Grid--12 aem-Grid--tablet--6 aem-Grid--phone--1 demo-Grid botom-content'>
                    <div className='aem-GridColumn aem-GridColumn--default--4 aem-Grid--tablet--6 aem-GridColumn--phone--hide aem-Grid--phone--1  demo-GridColumn demo-GridColumn--separator logo-image'>
                        <img src={logo} alt="here is Vnia logo" />
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--4 aem-Grid--tablet--6 aem-Grid--phone--1 demo-GridColumn demo-GridColumn--separator policy'>
                        <p>© Company Name Address Ave, City Name, State ZIP</p>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--4 aem-Grid--tablet--6 aem-Grid--phone--1 demo-GridColumn demo-GridColumn--separator contact-com'>
                        <a href='#'>Terms of Use</a>
                        <a href='#'>Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Footer; 