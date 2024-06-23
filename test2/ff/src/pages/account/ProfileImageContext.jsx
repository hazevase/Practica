
import React, {useEffect, createContext, useState} from 'react'

const ProfileImageContext = createContext();

const ProfileImageProvider = ({ children }) => {
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    // Загрузка из localStorage при первом монтировании компонента
    const storedProfileImage = localStorage.getItem('profileImage');
    if (storedProfileImage) {
      setProfileImage(storedProfileImage);
    }
  }, []);

  const updateProfileImage = (imageUrl) => {
    localStorage.setItem('profileImage', imageUrl);
    setProfileImage(imageUrl);
  };

  return (
    <ProfileImageContext.Provider value={{ profileImage, updateProfileImage }}>
      {children}
    </ProfileImageContext.Provider>
  );
};

export { ProfileImageContext, ProfileImageProvider };
