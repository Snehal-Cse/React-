import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
import { faAddressBook } from "@fortawesome/free-regular-svg-icons"
import "./header.css"
export default function Header(){
    return(
        <div className="container">
             <FontAwesomeIcon icon={faAddressBook} className="icon" />
            <ul className="list">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}