import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import React from 'react' // импорт библиотеки
import ImagePopup from './components/ImagePopup.js'
import PopupWithForm from './components/PopupWithForm.js'

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

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

  return (
    <>
      <Header />
      <Main selectedCard={selectedCard} onCardClick={handleCardClick} closeAllPopups={closeAllPopups} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} isEditProfilePopupOpen={isEditProfilePopupOpen} isAddPlacePopupOpen={isAddPlacePopupOpen} isEditAvatarPopupOpen={isEditAvatarPopupOpen}/>
      <Footer />
      <PopupWithForm buttonText="Сохранить" name="edit" title="Редактировать профиль" isOpen = {isEditProfilePopupOpen} onClose = {closeAllPopups} children={(
           <>
            <input
              type="text"
              id="name-input"
              className="popup__input popup__input_type_name"
              value="Жак-Ив Кусто"
              name="name"
              required
              placeholder="Имя"
              minLength="2"
              maxLength="40"
            />
            <span id="name-input-error" className="popup__input-error"></span>
            <input
              type="text"
              id="title-input"
              className="popup__input popup__input_type_title"
              value="Исследователь океана"
              name="about"
              required
              placeholder="О себе"
              minLength="2"
              maxLength="200"
            />
            <span id="title-input-error" className="popup__input-error"></span>
          </>
          )
        } />
        <PopupWithForm buttonText="Сохранить" name="add" title="Новое место" isOpen = {isAddPlacePopupOpen} onClose = {closeAllPopups} children={(
          <>
            <input
              type="text"
              id="placename-input"
              className="popup__input popup__input_type_addtitle"
              placeholder="Название"
              name="name"
              required
              minLength="2"
              maxLength="30"
            />
            <span id="placename-input-error" className="popup__input-error"></span>
            <input
              type="url"
              id="placeurl-input"
              className="popup__input popup__input_type_img-src"
              placeholder="Ссылка на картинку"
              name="link"
              required
            />
            <span id="placeurl-input-error" className="popup__input-error"></span>
          </>
          )
        }/>
        <PopupWithForm buttonText="Сохранить" name="avatar" title="Обновить аватар" isOpen = {isEditAvatarPopupOpen} onClose = {closeAllPopups} children={(
          <>
            <input
              type="url"
              id="avatarurl-input"
              className="popup__input popup__input_type_img-src"
              placeholder="Ссылка на картинку"
              name="avatar"
              required
            />
            <span id="avatarurl-input-error" className="popup__input-error"></span>
          </>
          )
        }/>
        <PopupWithForm buttonText="Да" name="delete" title="Вы уверены?" />
        <ImagePopup selectedCard={selectedCard} onClose = {closeAllPopups}/>
    </>
  );
}

export default App;
