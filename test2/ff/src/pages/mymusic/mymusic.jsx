import './mymusic.css'


function MyM() {
    return (
        <main className='content'>
            <section className='mymusic-section'>
                <div className="container">
                    <br />
                    <br />
                    <br />
                    <div className="mymusic-content">
                        <h1 className="mymusic-title">
                            Моя музыка
                        </h1>
                    </div>
                    <br />
                    <br />
                    <div className="nedavno-content">
                        <span className="nedavno-title">Недавно прослушаное</span>
                        <div className="nedavno-slider">
                            <br />
                            <div className="slider">
                                <span>slider</span>
                            </div>
                            <br />
                        </div>
                        <div className="mymusic-main">
                            <div className="mymusic-main-treci">
                                <span className="mymusic-main-treci__title">
                                    Треки
                                </span>
                                <span className="mymusic-main-treci__subtitle">
                                    По умолчанию
                                </span>
                                <div className="mymusic-main-treclist">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default MyM