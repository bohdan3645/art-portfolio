import { FC } from 'react';
import profilePic from '../assets/images/profile-pic.jpg'
import ContactInfo from '../components/ContactInfo';
import { contactOptions } from '../assets/content/content';

const Header: FC = () => {
    return (
        <>
            <header className='header__container'>
                <div className='header__content'>
                    <div className='profile__pic'>
                        <img src={profilePic} alt="profile picture" />
                    </div>
                    <h1>Bohdan B.</h1>
                    <p className='header__subtitle'>2D Illustrator / Cartoonist</p>
                    <ContactInfo contactOptions={contactOptions}/>
                </div>
            </header>
        </>
    );
}

export default Header;