import iconQA from '../../assets/icons/iconQA.png';
import './TestsMenu.scss';

export default function TestsMenu() {

return(
    <div className="mainContainer">
        <section className='sectionDark'>
            <div className='sectionContainer'>
                <p>Как QA engineer ты можешь 
                    специализироваться в одной области или нескольких. 
                    Выбирай нужный раздел тренажеров IT Roast 
                    и прожаривай свою компетенцию </p>
                <h2>QA manual</h2>
                <h2>AQA Python</h2>
                <h2>QA/AQA</h2>
            </div>
            <div className='sectionImgContainer'>
                <img src={iconQA} alt='icon'/>
            </div> 
        </section>    
    </div>
    )      
}