import ImagePopup from './ImagePopup.js'
import PopupWithForm from './PopupWithForm.js'
import {api} from '../utils/api.js'
import Card from './Card.js'
import React from 'react' // импорт библиотеки

function Main(props){
  const [userName, setUserName] = React.useState("Идёт загрузка");
  const [userDescription , setUserDescription ] = React.useState("Идёт загрузка");
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

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
      getPersonInfo()
      .then((data)=> {
        setUserName(data.name)
        setUserDescription(data.about)
        setUserAvatar(data.avatar)
      })
      .catch((error)=> {
        console.log(error);
      })
  }, [])

  return(
    <main>
        <section className="profile">
            <div className="profile__avatar-button" onClick={props.onEditAvatar}>
                <img
                src={userAvatar}
                alt={userName}
                className="profile__img"/>
                <div className="profile__hover">
                <div className="profile__hover-button"></div>
                </div>
            </div>
            <div className="profile__info">
                <div className="profile__text">
                <h1 className="profile__title">{userName}</h1>
                <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
            </div>
            <button type="button" className="profile__add-button" onClick={props.onAddPlace}>+</button>
        </section>
        <section className="elements-list">
            <ul className="elements">
              {cards.map((card, i) => (
                <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
              ))}
            </ul>
        </section>
        <PopupWithForm buttonText="Сохранить" name="edit" title="Редактировать профиль" isOpen = {props.isEditProfilePopupOpen} onClose = {props.closeAllPopups} children={(
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
        <PopupWithForm buttonText="Сохранить" name="add" title="Новое место" isOpen = {props.isAddPlacePopupOpen} onClose = {props.closeAllPopups} children={(
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
        <PopupWithForm buttonText="Сохранить" name="avatar" title="Обновить аватар" isOpen = {props.isEditAvatarPopupOpen} onClose = {props.closeAllPopups} children={(
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
        <ImagePopup selectedCard={props.selectedCard} onClose = {props.closeAllPopups}/>
    </main>
  )
}

export default Main;
