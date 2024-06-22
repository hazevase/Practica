import './account.css'
import Ava from './img/avatar.png'

function ACC() {

    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location = "/";
	};


  return (
  <main className='content'>
    <section className='account'>
        <div className="container">
            <div className="account-content">
                <h1 className="account-title">Профиль</h1>
            </div>
            <br />
            <br />
            <div className="account-main">
            <div className="account-avatar">
                <img width={325} height={325} className='avatar' src={Ava} alt="" />
                <button className="account-avatar__redact">Редактировать</button>
                <button className="account-avatar__redact" onClick={handleLogout}>Выйти</button>
            </div>
        <div className="account-info">
            <div className="account-info-main">
                <span className="account-info__title">Основное</span>
                <div className="account-info-main__layout">
                <div className="account-info-main__left">
                <div className="account-info-main__item">
                    <span>
                    Почта
                    </span>
                </div>
            </div>
                <div className="account-info-main__right">
                <div className="account-info-main__item">
                    <span>
                    Пароль
                    </span>
                </div>
                </div>
                </div> 
            </div>
            <div className="account-info__other">
                <div className="account-info-other__title">
                    <span>
                        Дополнительное
                    </span>
                </div>
                <div className="account-public">
                <span className="account-public__title">
                    Публичный доступ к фонотеке
                </span>
                <input type='checkbox' />
                </div>
                <div className="account-music">
                    <span className="account-music__title">
                        Путь к папке с музыкой
                    </span>
                    <input placeholder='C:/user/Documents/MusicforGay' type="text" />
                    <button className="account-music__btn">
                        Обзор...
                    </button>
                </div>
            </div>
            </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    </section>
  </main>
  )
}

export default ACC