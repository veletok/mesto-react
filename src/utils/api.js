class Api{
  constructor(config){
    this._url = config.url;
    this.headers = config.headers;
  }

  getPersonInfo(){
    return fetch(this._url + `users/me` , {
      method: "GET",
      headers: this.headers
    })
    .then(res => this._checkRequestResult(res))
  }

  setPersonInfo(personName, personAbout){
    return fetch(this._url + `users/me` , {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: personName,
        about: personAbout
      })
    })
    .then(res => this._checkRequestResult(res))
  }

  getCardsList(){
    return fetch(this._url + `cards` , {
      method: "GET",
      headers: this.headers
    })
    .then(res => this._checkRequestResult(res))
  }


  sendCard(data){
    return fetch(this._url + `cards` , {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(res => this._checkRequestResult(res))
  }

  deleteCard(cardID){
    return fetch(this._url + `cards/` + cardID, {
      method: "DELETE",
      headers: this.headers
    })
    .then(res => this._checkRequestResult(res))
  }

  setLike(cardID){
    return fetch(this._url + `cards/likes/` + cardID, {
      method: "PUT",
      headers: this.headers
    })
    .then(res => this._checkRequestResult(res))
  }


  removeLike(cardID){
    return fetch(this._url + `cards/likes/` + cardID, {
      method: "DELETE",
      headers: this.headers
    })
    .then(res => this._checkRequestResult(res))
  }

  setAvatar(url){
    return fetch(this._url + `users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: url,
      })
    })
    .then(res => this._checkRequestResult(res))
  }

  _checkRequestResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Возникла ошибка: ${res.status}`);
  }
}

export const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-20/",
  headers: {
    "content-type": 'application/json',
    authorization: '10333c32-2980-48cb-a84e-2ba96b8cc836'
  }
})
