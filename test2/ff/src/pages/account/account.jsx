import './account.css'
import anime from 'animejs';
import React, {useState, useRef, useEffect} from 'react'


function ACC() {
    const blockRef = useRef([]);
    const rightRef = useRef([])
    const user = localStorage.getItem('email')
    const role = localStorage.getItem('role')
    
    useEffect(() => {
        anime({
          targets: blockRef.current,
          opacity: [0, 1],
          translateY: [-40, 0],
          duration: 8000,
          easing: 'easeOutExpo',
        });
        anime({
            targets: rightRef.current,
            opacity: [0, 1],
            translateY: [0, 0],
            translateX: [-300, 0],
            duration: 6000,
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
    

    const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage') || null);
    const [selectedFile, setSelectedFile] = useState(null);
  
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    // Обработка клика по кнопке для изменения изображения
    const handleUpload = () => {
        if (selectedFile) {
          const reader = new FileReader();
          reader.readAsDataURL(selectedFile);
          reader.onloadend = () => {
            const imageUrl = reader.result;
            localStorage.setItem('profileImage', imageUrl);
            setProfileImage(imageUrl);
          };
        }
      };
    

    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location = "/";
	};


  return (
  <main className='content'>
    <section className='account'>
        <div className="container">
            <div ref={addToRefsT} className="account-content">
                <h1  className="account-title">Профиль</h1>
            </div>
            <br />
            <br />
            <div ref={addToRefsR} className="account-main">
            <div className="account-avatar">
                <img width={325} height={325} className='avatar' src={profileImage} alt="" />
                <input className='avatar-file' type="file" onChange={handleFileChange} />
                <button onClick={handleUpload} className="account-avatar__redact">Редактировать </button>
                <button className="account-avatar__redact" onClick={handleLogout}>Выйти</button>
            </div>
        <div className="account-info">
            <div className="account-info-main">
                <span className="account-info__title">Основное</span>
                <div className="account-info-main__layout">
                <div className="account-info-main__left">
                <div className="account-info-main__item">
                    <span>
                    {user}
                    </span>
                </div>
            </div>
                <div className="account-info-main__right">
                <div className="account-info-main__item">
                    <span>
                    {role}
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