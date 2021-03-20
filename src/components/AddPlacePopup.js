import React from 'react' // импорт библиотеки
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function AddPlacePopup(props){
  const [placeName, setPlaceName] = React.useState('')
  const [placeUrl, setPlaceUrl] = React.useState('')

  function placeNameChange(e) {
    setPlaceName(e.target.value);
  }
  function placeUrlChange(e) {
    setPlaceUrl(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    props.onAddPlace({
      name: placeName,
      link: placeUrl
    });
  }
  return(
    <section className={`popup popup-add ${props.isOpen ? `popup_opened` : ``}`}>
    <div className="popup__content">
      <button
        type="button"
        className={`popup__button-close popup__add}-close`}
        onClick={props.onClose}
      ></button>
      <h3 className="popup__title">Новое место</h3>
      <form className= {`popup__form popup__form_add`} name="add" noValidate onSubmit={handleSubmit}>
        <input
          type="text"
          id="placename-input"
          className="popup__input popup__input_type_addtitle"
          placeholder="Название"
          name="name"
          required
          minLength="2"
          maxLength="30"
          onChange={placeNameChange}
        />
        <span id="placename-input-error" className="popup__input-error"></span>
        <input
          type="url"
          id="placeurl-input"
          className="popup__input popup__input_type_img-src"
          placeholder="Ссылка на картинку"
          name="link"
          onChange={placeUrlChange}
          required
        />
        <span id="placeurl-input-error" className="popup__input-error"></span>
        <button type="submit" className={`popup__button-submit popup__button-submit_add`}>Сохранить</button>
      </form>
    </div>
  </section>
  )
}

export default AddPlacePopup;
