import './account.css'
import Ava from './img/avatar.png'

function ACC() {
  return (
  <main className='content'>
    <section className='account'>
        <div className="container">
            <div className="account-content">
                <h1 className="account-title">Профиль</h1>
            </div>
            <div className="account-main">
            <div className="account-avatar">
                <img width={325} height={325} className='avatar' src={Ava} alt="" />
                <button className="account-avatar__redact">Редактировать</button>
            </div>
        <div className="account-info">
            <div className="account-info-main">
                <span className="account-info__title">Основное</span>
                <div className="account-info-main__layout">
                <div className="account-info-main__left">
            <div className="account-info-main__item">
                    <span>
                    Никнейм
                    </span>
                </div>
                <div className="account-info-main__item">
                    <span>
                    Уникальный индекс
                    </span>
                </div> 
                <div className="account-info-main__item">
                    <span>
                    Почта
                    </span>
                </div>
            </div>
                <div className="account-info-main__right">
                <div className="account-info-main__item">
                    <span>
                    ФИО
                    </span>
                </div>
                <div className="account-info-main__item">
                    <span>
                    Пол
                    </span>
                </div>
                <div className="account-info-main__item">
                    <span>
                    Дата рождения
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
                <input type='radio' />
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
        </div>
    </section>
  </main>
  )
}

export default ACC