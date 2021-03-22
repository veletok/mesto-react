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
    <PopupWithForm onSubmit={handleSubmit} buttonText="Сохранить" name="avatar" title="Новое место" isOpen = {props.isOpen} onClose = {props.onClose} children={(
      <>
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
    </>)
      }/>
  )
}

export default EditAvatarPopup;
