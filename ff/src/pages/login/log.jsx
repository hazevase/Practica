import './log.css'
import Google from './img/icons/google-icon.svg'
import VK from './img/icons/VK-icon.svg'
import { Link} from 'react-router-dom';


function Reg() {
 

  return (
  <main className='content'>
    <section className='registration-section'>
        <div className="container">
            <div className="reg-grid">
                <div className="title-column">
                <div className="title">
                <h2 className="title-main">Слушай музыку для души</h2>
                <p className="title-sub">авторизуйтесь и начните путешествие по миру музыки </p>
            </div>
                </div>
            <div className="form-column">
            <form className='form-reg' onSubmit={handleSubmit}>
                    <div className="form-reg__body">
                    <span className="form-reg__title">Регестрация</span>

                    <input 
                    className='reg-input' 
                    placeholder='Email' 
                    size={50} 
                    type="text"
                    name="email"/>

                    <input 
                    className='reg-input' 
                    placeholder='Password' 
                    size={50} 
                    name="password"
                    type="text" />

                    <Link to="/" className='reg-wrongpass' href="">Вход</Link>
                    <Link type='submit' className='reg-btn'>ВОЙТИ</Link>
                    <p className='reg-alternative'>или</p>
                    <div className="reg-links">
                    <a href="" className="reg-links__icon google"> <img src={Google} alt="" /></a>
                    <a className='reg-links-icon__name active' href="">Google</a>
                    <a href="" className="reg-links__icon VK"> <img src={VK} alt="" /> </a>
                    <a className='reg-links-icon__name' href="">ВКонтакте</a>
                </div>
                    </div>
                </form>
            </div>
            </div> 
        </div>
    </section>
  </main>
  )
}

export default Reg;