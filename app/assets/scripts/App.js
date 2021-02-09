import "../styles/styles.css"
import MobileMenu from "./modules/MobileMenu"
import RevealOnScroll from "./modules/RevealOnScroll"
import StickyHeader from "./modules/StickyHeader"
import Modal from "./modules/Modal"
import ClientArea from "./modules/ClientArea"

// React Related Code goes Here

import React from "react"
import ReactDOM from "react-dom"

// import react component that we created

import MyComponent from "./modules/MyComponent"


ReactDOM.render(<MyComponent />, document.querySelector("#my-react-example"))

new ClientArea()
new Modal()
let stickyHeader = new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
let mobileMenu = new MobileMenu();
 
if (module.hot) {
    module.hot.accept()
}



