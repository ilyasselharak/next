import React from "react"
import  ReactDOM  from "react"

const myName = "ilyass el harak";
const home ="index.html";
const contact = "contact.html";
const age = 21;
ReactDOM.render(
  <div>
    <header>
        <div id="countainer">
          <img src="" width="100px"/>
          <div>
            <a href={home}>home</a>
            <a href={contact}>contact</a>
            <p>{myName}</p>
          </div>
        </div>
    </header>
  </div>,
  document.getElementsByTagName(body)
)