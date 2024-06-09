import './footer.css'
import apple from './icon/apple.svg'
import faceb from './icon/facebook.svg'
import google from './icon/google-play.svg'
import huawei from './icon/huawei.svg'
import telegram from './icon/telegram.svg'
import vk from './icon/VK.svg'


function Footer() {
  return (
    <footer className='footer'>
        <section className='footer-section'>
            <div className="container">
                <div className="footer-body">
                <div className="footer-title">
                    <h1 className='footer-title__logo'>sense of life</h1>
                </div>
                <div className="footer-about">
                    <span className='footer-about__title'>О НАС</span>
                    <a href="" className="footer-about__links">О компании</a>
                    <a href="" className="footer-about__links">Контакты</a>
                </div>
                <div className="footer-forUser">
                    <span className='footer-forUser__title'>ПОЛЬЗОВАТЕЛЯМ</span>
                    <a href="" className="footer-forUser__links">Пользовательское соглашение</a>
                    <a href="" className="footer-forUser__links">Политика конфиденциальности</a>
                    <a href="" className="footer-forUser__links">Поддержка</a>
                </div>
                <div className="social">
                    <div className="footer-social">
                        <a href="" className="footer-social__links"><img src={apple} alt="" /></a>
                        <a href="" className="footer-social__links"><img src={google} alt="" /></a>
                        <a href="" className="footer-social__links"><img src={huawei} alt="" /></a>
                    </div>
                    <div className="footer-social-contacts">
                        <a href="" className="footer-social__links"><img src={vk} alt="" /></a>
                        <a href="" className="footer-social__links"><img src={telegram} alt="" /></a>
                        <a href="" className="footer-social__links"><img src={faceb} alt="" /></a>
                    </div>
                
                </div>
                </div>
            </div>
        </section>
    </footer>
  )
}

export default Footer