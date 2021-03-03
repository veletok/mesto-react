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
      .catch((error)=> {
        console.log(error);
      })
  }, [])

  React.useEffect(() => {
    api.
      getPersonInfo()
      .then((data)=> {
        setUserName(data.name)
        setUserDescription(data.about)
        setUserAvatar(data.avatar)
      })
      .catch((error)=> {
        console.log(error);
      })
  }, [])

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
                <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
              ))}
            </ul>
        </section>
    </main>
  )
}

export default Main;
