import './MidBox.css';
import Box from './Box.js';
import icon1 from '../images/icon-api.svg';
import icon2 from '../images/icon-budgeting.svg';
import icon3 from '../images/icon-onboarding.svg';
import icon4 from '../images/icon-online.svg';

function MidBox(){
    return(
        <div className="box">
            <div className="labelMidBox">
                <div className="midTitle"><h2>Why choose Easybank?</h2></div>
                <div className="midDescription"><p>We leverage Open Banking to turn yout bank account into your financial hub. Control your finances like never before.</p></div>
            </div>
            <div className="allBox">
                <Box 
                 icon ={icon4} 
                 title = 'Online Banking' 
                 description = 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
                />
                <Box 
                 icon ={icon2} 
                 title = 'Simple Budgeting' 
                 description = 'See exactly where your money goes each month. Receive notifications when you are close to hitting your limits.'
                />
                <Box 
                 icon ={icon3} 
                 title = 'Fast Onboarding' 
                 description = 'We dont do branches. Open your account in minutes online and start taking control of your finacens right away.'
                />
                <Box 
                 icon ={icon1} 
                 title = 'Open API' 
                 description = 'Manage your savings, investments, pensions, and much more from one account. Tracking your money has never been easier.'
                />
              
            </div>
        </div>
    )
}
export default MidBox;