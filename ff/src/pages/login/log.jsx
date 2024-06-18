import './log.css'
import Google from './img/icons/google-icon.svg'
import VK from './img/icons/VK-icon.svg'
import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'


function Reg() {
 
const [email, setEmail] = useState()
const [password, setPassword] = useState()
const navigate =  useNavigate()

const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://127.0.0.1:3001/register', {email, password})
    .then(result => {console.log(result)
    navigate('/')
    })
    .catch(err=> console.log(err))
}

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
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <input 
                    className='reg-input' 
                    placeholder='Password' 
                    size={50} 
                    name="password"
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    <Link to="/" className='reg-wrongpass' href="">Вход</Link>
                    <button type='submit' className='reg-btn'>ВОЙТИ</button>
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