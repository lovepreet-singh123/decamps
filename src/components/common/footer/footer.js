import { Container } from 'react-bootstrap'
import logo from "../../../../public/assets/logo/logo-white.png";
import Image from 'next/image';
import Link from 'next/link';
import { SOCIAL_MEDIA } from '@/utils/constants';
import { DiscordIcon, MailIcon, PhoneIcon, TelegramIcon } from '../../../../public/assets/icons/icons';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer_in">
                <Container>
                    <div className="footer_content">
                        <div className="footer_left">
                            <Link href="/" className="logo"><Image src={logo} alt="logo" /></Link>
                            <p>Lorem ipsum dolor sit amet consectetur. Nullam nibh posuere ac venenatis massa amet. Gravida amet bibendum sapien dignissim ac. Lorem ipsum dolor sit amet consectetur. Nullam nibh posuere ac venenatis massa amet.
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet consectetur. Nullam nibh posuere ac venenatis massa amet.</p>
                        </div>
                        <div className="footer_nav">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><Link href="/">Assets</Link></li>
                                <li><Link href="/">Product</Link></li>
                                <li><Link href="/">About Us</Link></li>
                                <li><Link href="/">Learn</Link></li>
                                <li><Link href="/">Career</Link></li>
                            </ul>
                        </div>
                        <div className="footer_nav security">
                            <h3>Security</h3>
                            <ul>
                                <li><Link href="/">Privacy Policy</Link></li>
                                <li><Link href="/">Terms of Use</Link></li>
                                <li><Link href="/">Legal Information</Link></li>
                                <li><Link href="/">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="footer_nav contact">
                            <h3>Contact</h3>
                            <ul>
                                <li><Link href={`tel:${SOCIAL_MEDIA.PHONE}`} rel="noreferrer" target="_blank"><PhoneIcon /> {SOCIAL_MEDIA.PHONE}</Link></li>
                                <li><Link href={`mailto:${SOCIAL_MEDIA.MAIL}`} rel="noreferrer" target="_blank"><MailIcon />{SOCIAL_MEDIA.MAIL}</Link></li>
                            </ul>
                            <div className="social_media">
                                <Link href={SOCIAL_MEDIA.TELEGRAM} target="_blank" rel="noreferrer"><TelegramIcon /></Link>
                                <Link href={SOCIAL_MEDIA.DISCORD} target="_blank" rel="noreferrer"><DiscordIcon /></Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="footer_copyright">
                <p>© {new Date().getFullYear()} TokenCrowd. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
