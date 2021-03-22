import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import React from 'react' // импорт библиотеки
import ImagePopup from './ImagePopup.js'
import AddPlacePopup from './AddPlacePopup.js'
import EditAvatarPopup from './EditAvatarPopup.js'
import EditProfilePopup from './EditProfilePopup.js'
import PopupWithForm from './PopupWithForm.js'
import {api} from '../utils/api.js'

import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function App() {
  const [cards, setCards] = React.useState([]);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({})
  const currentPerson = React.useContext(CurrentUserContext)

  React.useEffect(() => {
    api.
      getCardsList()
      .then((data)=> {
        setCards(data)
      })
      .catch((error)=> {
        console.log(error);
      })
  }, [])

  React.useEffect(() => {
    api.
      getUserInfo()
      .then((data)=> {
        setCurrentUser(data)
      })
      .catch((error)=> {
        console.log(error);
      })
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    if(!isLiked) {
      api.setLike(card._id).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((error)=> {
        console.log(error);
      });
    }
    if(isLiked) {
      api.removeLike(card._id).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((error)=> {
        console.log(error);
      });
    }
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((e => e._id !== card._id)))
    });
  }

  function handleCardClick (data) {
    setSelectedCard(data)
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false)
    setSelectedCard({});
  }
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  function handleAddPlaceSubmit(data){
    api.
    sendCard(data)
    .then((newCard)=> {
      setCards([newCard, ...cards]);
      closeAllPopups()
    })
    .catch((error)=> {
      console.log(error);
    })
  }

  function handleUpdateUser(data) {
    api.
    setUserInfo(data.name, data.about)
    .then((data)=> {
      setCurrentUser(data)
      closeAllPopups()
    })
    .catch((error)=> {
      console.log(error);
    })
  }

  function handleUpdateAvatar(data){
    api.
    setAvatar(data.avatar)
    .then((data)=> {
      setCurrentUser(data)
      closeAllPopups()
    })
    .catch((error)=> {
      console.log(error);
    })
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} selectedCard={selectedCard} onCardClick={handleCardClick} closeAllPopups={closeAllPopups} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} isEditProfilePopupOpen={isEditProfilePopupOpen} isAddPlacePopupOpen={isAddPlacePopupOpen} isEditAvatarPopupOpen={isEditAvatarPopupOpen}/>
      <Footer />
      <EditProfilePopup isOpen = {isEditProfilePopupOpen} onClose = {closeAllPopups} onUpdateUser={handleUpdateUser}/>
      <AddPlacePopup isOpen = {isAddPlacePopupOpen} onClose = {closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
      <PopupWithForm buttonText="Да" name="delete" title="Вы уверены?" />
      <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups}/>
    </CurrentUserContext.Provider>
  );
}

export default App;
