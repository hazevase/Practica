import './reg.css'
import Google from './img/icons/google-icon.svg'
import VK from './img/icons/VK-icon.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'


function Reg() {

    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

   

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
            // const { token, role } = response.data;
			localStorage.setItem("token", res.data);
            

			window.location = "/Main";
            
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}

     
	};

   

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
                    <span className="form-reg__title">ВХОД</span>
                    <input  
                    className='reg-input'  
                    placeholder='Email' 
                    size={50} 
                    type="email"
                    name="email" 
                    onChange={handleChange}
					value={data.email}
					required
					/>

                    <input  
                    className='reg-input' 
                    placeholder='Password' 
                    size={50} 
                    name="password"
                    type="password"
                    onChange={handleChange}
					value={data.password}
					required
                    />

                    {error && <div className='reg-error'>{error}</div>}
                    <Link to="/login" className='reg-wrongpass' href="">Регестрация</Link>
                    <button type="submit" className='reg-btn'>ВОЙТИ</button>
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