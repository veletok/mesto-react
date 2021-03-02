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
      <form className= {`popup__form popup__form_${props.name}`} name={props.name} noValidate>
       {props.children}
      </form>
    </div>
  </section>
  )
}

export default PopupWithForm;
