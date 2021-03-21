function PopupWithForm(props){
  return(
    <section className={`popup popup-${props.name} ${props.isOpen ? `popup_opened` : ``}`}>
    <div className="popup__content">
      <button
        type="button"
        className={`popup__button-close popup__${props.name}-close`}
        onClick={props.onClose}
      ></button>
      <h3 className="popup__title">{props.title}</h3>
       {props.children}
    </div>
  </section>
  )
}

export default PopupWithForm;
