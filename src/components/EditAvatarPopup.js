import React from 'react' // импорт библиотеки
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'
import PopupWithForm from './PopupWithForm.js'

function EditAvatarPopup(props) {

  const avaRef = React.useRef();
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avaRef.current.value
    });
  }
  return(
    <PopupWithForm buttonText="Сохранить" name="avatar" title="Новое место" isOpen = {props.isOpen} onClose = {props.onClose} children={(
      <form className= {`popup__form popup__form_avatar`} name="avatar" noValidate onSubmit={handleSubmit}>
      <input
        type="url"
        id="avatarurl-input"
        className="popup__input popup__input_type_img-src"
        placeholder="Ссылка на картинку"
        name="avatar"
        required
        ref={avaRef}
      />
      <span id="avatarurl-input-error" className="popup__input-error"></span>
     <button type="submit" className={`popup__button-submit popup__button-submit_avatar`}>Сохранить</button>
    </form>)
      }/>
  )
}

export default EditAvatarPopup;
