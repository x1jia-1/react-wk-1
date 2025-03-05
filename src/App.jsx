import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Trash Auction</title>
  <link rel="stylesheet" href="./css/styles.css" />
  <link rel="stylesheet" href="./css/normalize.css" />
  <header>
    <div className="menu">
      <button className="burger-menu">
        <img src="./img/burger-bar.png" />
      </button>
    </div>
    <div className="header-text">
      <p>
        We sell the useless stuff
        <br />
        you don't even want.
      </p>
    </div>
    <div className="icons">
      <button className="shopping-cart">
        <img src="./img/shopping-cart.png" />
      </button>
      <a href="./login.html">
        <button className="user-account">
          <img src="./img/profile-user.png" />
        </button>
      </a>
    </div>
  </header>
  <main>
    <section className="title-section">
      <a href="./index.html" className="title-button">
        <h1>Trash Auction</h1>
      </a>
    </section>
    <section className="carousel-section">
      <div className="carousel-wrapper">
        <div className="carousel">
          <div className="carousel-item">
            <img src="./img/trash1.png" alt="Trash 68" />
            <span className="trash-number">Trash #68</span>
            <span className="trash-price">69 NT$</span>
          </div>
          <div className="carousel-item">
            <a href="./trash-69.html">
              <img src="./img/trash2.png" alt="Trash 69" />
              <span className="trash-number">Trash #69</span>
              <span className="trash-price">690 NT$</span>
            </a>
          </div>
          <div className="carousel-item">
            <img src="./img/trash3.png" alt="Trash 70" />
            <span className="trash-number">Trash #70</span>
            <span className="trash-price">690 NT$</span>
          </div>
          <div className="carousel-item">
            <img src="./img/trash1.png" alt="Trash 68" />
            <span className="trash-number">Trash #68</span>
            <span className="trash-price">69 NT$</span>
          </div>
          <div className="carousel-item">
            <a href="./trash-69.html">
              <img src="./img/trash2.png" alt="Trash 69" />
              <span className="trash-number">Trash #69</span>
              <span className="trash-price">690 NT$</span>
            </a>
          </div>
          <div className="carousel-item">
            <img src="./img/trash3.png" alt="Trash 70" />
            <span className="trash-number">Trash #70</span>
            <span className="trash-price">690 NT$</span>
          </div>
        </div>
        <button className="carousel-arrow left-arrow">&lt;</button>
        <button className="carousel-arrow right-arrow">&gt;</button>
      </div>
    </section>
    <div className="info-section">
      <div className="info-column">
        <h2>Things you may be interested:</h2>
        <div className="card">
          <img src="./img/trash4.jpg" alt="Trash #420" />
          <div className="card-content">
            <p className="card-title">Trash #420</p>
            <p>
              This Trash is not like any other trash, because fuck idk. Get a
              life and stop reading this please. We are selling trash, not weed.
            </p>
            <p className="card-price">4,200 NT$</p>
          </div>
        </div>
        <div className="card">
          <img src="./img/trash5.jpg" alt="Trash #420" />
          <div className="card-content">
            <p className="card-title">Trash #420</p>
            <p>
              This Trash is not like any other trash, because fuck idk. Get a
              life and stop reading this please. We are selling trash, not weed.
            </p>
            <p className="card-price">4,200 NT$</p>
          </div>
        </div>
        <div className="card">
          <img src="./img/trash6.jpg" alt="Trash #420" />
          <div className="card-content">
            <p className="card-title">Trash #420</p>
            <p>
              This Trash is not like any other trash, because fuck idk. Get a
              life and stop reading this please. We are selling trash, not weed.
            </p>
            <p className="card-price">4,200 NT$</p>
          </div>
        </div>
      </div>
      <div className="info-column">
        <h2>Hot!!!</h2>
        <div className="card">
          <img src="./img/trash7.jpg" alt="Trash #420" />
          <div className="card-content">
            <p className="card-title">Trash #420</p>
            <p>
              This Trash is not like any other trash, because fuck idk. Get a
              life and stop reading this please. We are selling trash, not weed.
            </p>
            <p className="card-price">4,200 NT$</p>
          </div>
        </div>
        <div className="card">
          <img src="./img/trash8.jpg" alt="Trash #420" />
          <div className="card-content">
            <p className="card-title">Trash #420</p>
            <p>
              This Trash is not like any other trash, because fuck idk. Get a
              life and stop reading this please. We are selling trash, not weed.
            </p>
            <p className="card-price">4,200 NT$</p>
          </div>
        </div>
        <div className="card">
          <img src="./img/trash9.jpg" alt="Trash #420" />
          <div className="card-content">
            <p className="card-title">Trash #420</p>
            <p>
              This Trash is not like any other trash, because fuck idk. Get a
              life and stop reading this please. We are selling trash, not weed.
            </p>
            <p className="card-price">4,200 NT$</p>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <p>
        We don't give a fuck about our copyright. Use this to set up your trash
        website, you're welcome.
      </p>
    </footer>
  </main>
</>

  )
}

export default App
