import { FC } from 'react';
import { IconType } from 'react-icons/lib';

interface ContactOption {
    name: string
    icon: JSX.Element
    info: string
    link: string
}

interface IProps {
    contactOptions: ContactOption[];
}

const ContactInfo: FC<IProps> = (props) => {
    return (
        <address className='contact__container'>
            {props.contactOptions.map((option, i) => {
                return (
                    <a
                        key={option.name + i}
                        href={option.link} 
                         
                        target='_blank'
                    >
                        <div className='contact__link'>
                            <div>{option.icon}</div>
                            <div className='contact__info'>{option.info}</div>
                        </div>
                    </a>
                )
            })}
        </address>
    );
};

export default ContactInfo;