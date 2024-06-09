import './glav.css'


function Reg() {
  return (
  <main className='content'>
    <section className='glav-section'>
        <div className="container">


            <div className="glav">
                <h1 className="glav-title">Главная</h1>
                <span className='glav-subtitle'>Что послушать?</span>
            </div>


            <div className="news">
                <div className="news rec-music">
                <span className='news-title'>
                    РЕКОМЕНДАЦИИ
                </span>
                <a href="" className="news-subtitle">Слушать</a>
                </div>
                <div className="news new-music">
                <span className='news-title'>
                    НОВИНКИ
                </span>
                <a href="" className="news-subtitle">Слушать</a>
                </div>
                <div className="news top-music">
                <span className='news-title'>
                    ТОП-ЧАРТЫ
                </span>
                <a href="" className="news-subtitle">Слушать</a>
                </div>
                <div className="news day-music">
                <span className='news-title'>
                    ПЛЕЙЛИСТ ДНЯ
                </span>
                <a href="" className="news-subtitle">Слушать</a>
                </div>
            </div>


            <div className="glav-moon">
                <span className="glav-moon__title">Какое сейчас настроение?</span>
            </div>
            <div className="glav-moon-card">
                <div className="glav-moon-card good">
                    <a className='glav-moon-card__title' href="">
                        Радостное 
                    </a>
                </div>
                <div className="glav-moon-card sad">
                    <a className='glav-moon-card__title' href="">
                        Грустное
                    </a>
                </div>
                <div className="glav-moon-card norm">
                    <a className='glav-moon-card__title' href="">
                        Спокойное
                    </a>
                </div>
                <div className="glav-moon-card rom">
                    <a className='glav-moon-card__title' href="">
                        Романтичное 
                    </a>
                </div>
                <div className="glav-moon-card lifegood">
                    <a className='glav-moon-card__title' href="">
                        Жизнерадотсное
                    </a>
                </div>
            </div>


            <div className="playlists">
                <span>
                    Плейлситы для вас
                </span>
            </div>
            <div className="playlists-card">
                <div className="playlists-card-item">
                    <span className='playlists-card-item__title'>
                        Похоже на:
                    </span>
                    <a className='playlist-card-item__link' href="">ROMANTICA, Lestmor, DVRST</a>
                </div>
                <div className="playlists-card-item">
                    <span className='playlists-card-item__title'>
                        Похоже на:
                    </span>
                    <a className='playlist-card-item__link' href="">ROMANTICA, Lestmor, DVRST</a>
                </div>
                <div className="playlists-card-item">
                    <span className='playlists-card-item__title'>
                        Похоже на:
                    </span>
                    <a className='playlist-card-item__link' href="">ROMANTICA, Lestmor, DVRST</a>
                </div>
                <div className="playlists-card-item">
                    <span className='playlists-card-item__title'>
                        Похоже на:
                    </span>
                    <a className='playlist-card-item__link' href="">ROMANTIC, Lestmor, DVRST</a>
                </div>
                <div className="playlists-card-item">
                    <span className='playlists-card-item__title'>
                        Похоже на:
                    </span>
                    <a className='playlist-card-item__link' href="">ROMANTICA, Lestmor, DVRST</a>
                </div>
            </div>

            <div className="janrmus">
                <span className='janrmus-title'>
                    Жанры музыки
                </span>
                <div className="janrmus-catal">
                    <div className="janrmus-cards">
                        <div className="janrmus-cards-item">
                            <div className="janrmus-cards-item__icon"></div>
                        </div>
                    </div>
                    <div className="janrmus-cards">
                        <div className="janrmus-cards-item">
                            <div className="janrmus-cards-item__icon"></div>
                            <a className='janrmus-cards-item__title' href=""></a>
                        </div>
                    </div>
                    <div className="janrmus-cards">
                        <div className="janrmus-cards-item">
                            <div className="janrmus-cards-item__icon"></div>
                            <a className='janrmus-cards-item__title' href=""></a>
                        </div>
                    </div>
                    <div className="janrmus-cards">
                        <div className="janrmus-cards-item">
                            <div className="janrmus-cards-item__icon"></div>
                            <a className='janrmus-cards-item__title' href=""></a>
                        </div>
                    </div>
                    <div className="janrmus-cards">
                        <div className="janrmus-cards-item">
                            <div className="janrmus-cards-item__icon"></div>
                            <a className='janrmus-cards-item__title' href=""></a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  </main>
  )
}

export default Reg