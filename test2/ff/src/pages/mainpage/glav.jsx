import './glav.css'
import Metan from './img/Metan.png'
import YHHB from './img/YHHB.png'
import Vspak from './img/Vspak.png'
import MrKitty from './img/MrKitty.png'
import Coi from './img/Coi.png'
import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from 'react'
import anime from 'animejs';






function Glav() {
    const blockRef = useRef([]);
    const rightRef = useRef([]);

    useEffect(() => {
        anime({
            targets: blockRef.current,
            opacity: [0, 1],
            translateY: [-40, 0],
            duration: 6000,
            easing: 'easeOutExpo',
        });
        anime({
            targets: rightRef.current,
            opacity: [0, 1],
            translateY: [0, 0],
            translateX: [-300, 0],
            duration: 7000,
            easing: 'easeOutExpo',
        });
    }, []);

    const addToRefsT = (el) => {
        if (el && !blockRef.current.includes(el)) {
            blockRef.current.push(el);
        }
    };

    const addToRefsR = (el) => {
        if (el && !rightRef.current.includes(el)) {
            rightRef.current.push(el);
        }
    };


    return (

        <main className='content'>

            <section className='glav-section'>

                <div className="container">


                    <div ref={addToRefsT} className="glav">
                        <h1 className="glav-title">Главная</h1>
                        <span className='glav-subtitle'>Что послушать?</span>
                    </div>


                    <div ref={addToRefsR} className="news">
                        <div className="news rec-music">
                            <span className='news-title'>
                                РЕКОМЕНДАЦИИ
                            </span>
                            <Link to="/Recomendations"><a href="" className="news-subtitle">Слушать</a></Link>
                        </div>
                        <div className="news new-music">
                            <span className='news-title'>
                                НОВИНКИ
                            </span>
                            <Link to="/News"><a href="" className="news-subtitle">Слушать</a></Link>
                        </div>
                        <div className="news top-music">
                            <span className='news-title'>
                                ТОП-ЧАРТЫ
                            </span>
                            <Link to="/Top-charts"><a href="" className="news-subtitle">Слушать</a></Link>
                        </div>
                        <div className="news day-music">
                            <span className='news-title'>
                                ПЛЕЙЛИСТ ДНЯ
                            </span>
                            <Link to="/Playlist-Day"><a href="" className="news-subtitle">Слушать</a></Link>
                        </div>
                    </div>


                    <div ref={addToRefsT} className="glav-moon">
                        <span className="glav-moon__title">Какое сейчас настроение?</span>
                    </div>
                    <div ref={addToRefsR} className="glav-moon-card">
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


                    <div ref={addToRefsT} className="playlists">
                        <span>
                            Плейлситы для вас
                        </span>
                    </div>
                    <div ref={addToRefsR} className="playlists-card">
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
                    <br />
                    <br />
                    <div ref={addToRefsT} className="janrmus">
                        <div className="">
                            <span className='janrmus-title'>
                                Жанры музыки
                            </span>
                        </div>
                        <div ref={addToRefsR} className="janrmus-catal">
                            <div className="janrmus-cards">
                                <div className="janrmus-cards-item">
                                    <div className="janrmus-cards-item__icon"></div>
                                    <Link to="/Elec"><a className='janrmus-cards-item__title' href="">Электроника</a></Link>
                                </div>
                            </div>
                            <div className="janrmus-cards">
                                <div className="janrmus-cards-item">
                                    <div className="janrmus-cards-item__icon dark"></div>
                                    <Link to="/Rock"><a className='janrmus-cards-item__title' href="">Рок</a></Link>
                                </div>
                            </div>
                            <div className="janrmus-cards">
                                <div className="janrmus-cards-item">
                                    <div className="janrmus-cards-item__icon pink"></div>
                                    <Link to="/Pop"><a className='janrmus-cards-item__title' href="">Поп</a></Link>
                                </div>
                            </div>
                            <div className="janrmus-cards">
                                <div className="janrmus-cards-item">
                                    <div className="janrmus-cards-item__icon grey"></div>
                                    <Link to="/Rap"><a className='janrmus-cards-item__title' href="">хардстайл</a></Link>
                                </div>
                            </div>
                            <div className="janrmus-cards">
                                <div className="janrmus-cards-item">
                                    <div className="janrmus-cards-item__icon yel"></div>
                                    <Link to="/Shan"><a className='janrmus-cards-item__title' href="">Шансон</a></Link>
                                </div>
                            </div>

                        </div>
                        <div className="janrmus-catal">
                            <div className="janrmus-cards">
                                <div className="janrmus-cards-item">
                                    <div className="janrmus-cards-item__icon whi"></div>
                                    <a className='janrmus-cards-item__title' href="">Электроника</a>
                                </div>
                            </div>
                            <div className="janrmus-cards">
                                <div className="janrmus-cards-item">
                                    <div className="janrmus-cards-item__icon blue"></div>
                                    <a className='janrmus-cards-item__title' href="">Рок</a>
                                </div>
                            </div>
                            <div className="janrmus-cards">
                                <div className="janrmus-cards-item">
                                    <div className="janrmus-cards-item__icon lig"></div>
                                    <a className='janrmus-cards-item__title' href="">Поп</a>
                                </div>
                            </div>
                            <div className="janrmus-cards">
                                <div className="janrmus-cards-item">
                                    <div className="janrmus-cards-item__icon green"></div>
                                    <a className='janrmus-cards-item__title' href="">хардстайл</a>
                                </div>
                            </div>
                            <div className="janrmus-cards">
                                <div className="janrmus-cards-item">
                                    <div className="janrmus-cards-item__icon yeli"></div>
                                    <a className='janrmus-cards-item__title' href="">Шансон</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div ref={addToRefsR} className="other">
                        <button className="other-btn">Показать еще</button>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div ref={addToRefsT} className="popular-creator__title">
                        <span>
                            Популярные исполнители
                        </span>
                    </div>
                    <br />
                    <div ref={addToRefsR} className="popular-creator">
                        <div className="popular-creator-info">
                            <img className='popular-creator-info__photo' src={Metan} alt="" />
                            <span className="popular-creator-info__name">Metan</span>
                            <span className="popular-creator-info__janr">Рэп</span>
                        </div>
                        <div className="popular-creator-info">
                            <img className='popular-creator-info__photo' src={YHHB} alt="" />
                            <span className="popular-creator-info__name">УННВ</span>
                            <span className="popular-creator-info__janr">Рэп</span>
                        </div>
                        <div className="popular-creator-info">
                            <img className='popular-creator-info__photo' src={Vspak} alt="" />
                            <span className="popular-creator-info__name">Vspak</span>
                            <span className="popular-creator-info__janr">Лирика</span>
                        </div>
                        <div className="popular-creator-info">
                            <img className='popular-creator-info__photo' src={MrKitty} alt="" />
                            <span className="popular-creator-info__name">Mr.Kitty</span>
                            <span className="popular-creator-info__janr">Электро</span>
                        </div>
                        <div className="popular-creator-info">
                            <img className='popular-creator-info__photo' src={Coi} alt="" />
                            <span className="popular-creator-info__name">Цой</span>
                            <span className="popular-creator-info__janr">Рок</span>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </section>


        </main>

    )
}

export default Glav