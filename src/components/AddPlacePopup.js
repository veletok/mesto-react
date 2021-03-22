import React from 'react' // импорт библиотеки
import PopupWithForm from './PopupWithForm.js'

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
    setPlaceName('')
    setPlaceUrl('')
  }
  return(
    <PopupWithForm buttonText="Сохранить" name="add" title="Новое место" isOpen = {props.isOpen} onClose = {props.onClose} onSubmit={handleSubmit} buttonText={`Сохранить`} children={(
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
            onChange={placeNameChange}
            value={placeName}
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
            value={placeUrl}
          />
          <span id="placeurl-input-error" className="popup__input-error"></span>
        </>)
        }/>
  )
}

export default AddPlacePopup;
