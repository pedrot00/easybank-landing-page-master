import './MainBox.css';
import intro from '../images/bg-intro-desktop.svg';
import cell from '../images/image-mockups.png';

function MainBox(){
    return(
    <>
        <div className="labelBox">
            <div className="title"><h1>Next generation digital banking</h1></div>
            <div className="description"><p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.</p></div>
            <button className='Button'>Request Invite</button>
        </div>
        <img src = {intro} className='intro'></img>
        <img src = {cell} className='cell'></img>
    </>
    )
}
export default MainBox;