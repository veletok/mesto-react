import React from 'react' // импорт библиотеки
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'
import PopupWithForm from './PopupWithForm.js'

function EditProfilePopup(props) {
  const currentPerson = React.useContext(CurrentUserContext)
  const [name, setName] = React.useState(currentPerson.name)
  const [description, setDescription] = React.useState(currentPerson.about)

  function nameChange(e) {
    setName(e.target.value);
  }

  function descriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(currentPerson.name);
    setDescription(currentPerson.about);
  }, [currentPerson]);


  return(
    <PopupWithForm buttonText="Сохранить" name="edit" onSubmit={handleSubmit} title="Редактировать профиль" isOpen = {props.isOpen} onClose = {props.onClose} children={(
      <>
        <input
          type="text"
          id="name-input"
          className="popup__input popup__input_type_name"
          value={name || ''}
          name="name"
          required
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          onChange={nameChange}
        />
        <span id="name-input-error" className="popup__input-error"></span>
        <input
          type="text"
          id="title-input"
          className="popup__input popup__input_type_title"
          value={description || ''}
          name="about"
          required
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          onChange={descriptionChange}
        />
        <span id="title-input-error" className="popup__input-error"></span>
      </>)
      }/>
  )
}

export default EditProfilePopup;
