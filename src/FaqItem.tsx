import './FaqItem.scss'
import arrowIcon from './assets/icon-arrow-down.svg'
import {useState} from "react";

function FaqItem({heading, paragraph, isOpen}: { heading: string, paragraph: string, isOpen?: boolean }) {

    const [toggle, setToggle] = useState<boolean>(isOpen || false);

    const toggleFag = () => {
        setToggle(() => !toggle)
    }

    return (<div className={'faq-item'} onClick={toggleFag}>
        <h2 className={toggle ? 'selected' : ''}><span>{heading}</span>
            <img src={arrowIcon} alt="" className={toggle ? 'rotate-180' : ''}/>
        </h2>
        {toggle ? <p>{paragraph}</p> : null}
    </div>);
}

export default FaqItem;

