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
  })

  React.useEffect(() => {
    api.
      getPersonInfo()
      .then((data)=> {
        setUserName(data.name)
        setUserDescription(data.about)
        setUserAvatar(data.avatar)
      })
  })

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
                <Card card={card} key={i} onCardClick={props.onCardClick}/>
              ))}
            </ul>
        </section>
        <PopupWithForm name="edit" title="Редактировать профиль" isOpen = {props.isEditProfilePopupOpen} onClose = {props.closeAllPopups} children={(
           <>
            <input
              type="text"
              id="name-input"
              class="popup__input popup__input_type_name"
              value="Жак-Ив Кусто"
              name="name"
              required
              placeholder="Имя"
              minlength="2"
              maxlength="40"
            />
            <span id="name-input-error" class="popup__input-error"></span>
            <input
              type="text"
              id="title-input"
              class="popup__input popup__input_type_title"
              value="Исследователь океана"
              name="about"
              required
              placeholder="О себе"
              minlength="2"
              maxlength="200"
            />
            <span id="title-input-error" class="popup__input-error"></span>
            <button type="submit" class="popup__button-submit popup__button-submit_edit">Сохранить</button>
          </>
          )
        } />
        <PopupWithForm name="add" title="Новое место" isOpen = {props.isAddPlacePopupOpen} onClose = {props.closeAllPopups} children={(
          <>
            <input
              type="text"
              id="placename-input"
              class="popup__input popup__input_type_addtitle"
              placeholder="Название"
              name="name"
              required
              minlength="2"
              maxlength="30"
            />
            <span id="placename-input-error" class="popup__input-error"></span>
            <input
              type="url"
              id="placeurl-input"
              class="popup__input popup__input_type_img-src"
              placeholder="Ссылка на картинку"
              name="link"
              required
            />
            <span id="placeurl-input-error" class="popup__input-error"></span>
            <button type="submit" class="popup__button-submit popup__button-submit_addcard">Сохранить</button>
          </>
          )
        }/>
        <PopupWithForm name="avatar" title="Обновить аватар" isOpen = {props.isEditAvatarPopupOpen} onClose = {props.closeAllPopups} children={(
          <>
            <input
              type="url"
              id="avatarurl-input"
              class="popup__input popup__input_type_img-src"
              placeholder="Ссылка на картинку"
              name="avatar"
              required
            />
            <span id="avatarurl-input-error" class="popup__input-error"></span>
            <button type="submit" class="popup__button-submit popup__button-submit_avatar">Сохранить</button>
          </>
          )
        }/>
        <PopupWithForm name="delete" title="Вы уверены?" children={(
          <>
            <button type="submit" class="popup__button-submit popup__button-submit_delete">Да</button>
          </>
          )
        }/>
        <ImagePopup selectedCard={props.selectedCard} onClose = {props.closeAllPopups}/>
    </main>
  )
}

export default Main;
