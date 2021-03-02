function ImagePopup(props){
  return(
    <section className={`popup popup-image ${Object.keys(props.selectedCard).length === 0 ? `` : `popup_opened`}`}>
      <div className="popup-image__container">
        <button
          type="button"
          className="popup__button-close popup__image-close"
          onClick={props.onClose}
        ></button>
        <img className="popup-image__img" alt={props.selectedCard.name} src={props.selectedCard.link} />
        <div className="popup-image__title">{props.selectedCard.name}</div>
      </div>
    </section>
  )
}

export default ImagePopup;
