import React from 'react' // импорт библиотеки
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function EditAvatarPopup(props) {

  const avaRef = React.useRef();
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avaRef.current.value
    });
  }
  return(
    <section className={`popup popup-avatar ${props.isOpen ? `popup_opened` : ``}`}>
    <div className="popup__content">
      <button
        type="button"
        className={`popup__button-close popup__avatar-close`}
        onClick={props.onClose}
      ></button>
      <h3 className="popup__title">Обновить аватар</h3>
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
      </form>
    </div>
  </section>
  )
}

export default EditAvatarPopup;
