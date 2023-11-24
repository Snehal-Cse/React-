import React from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faRocketchat, faPhone } from "@fortawesome/free-solid-svg-icons"
import "./form.css"
export default function Form(){
    const [formData, setFormData] = React.useState(
        {
            Name:"",
            Email:"",
            TextContent:""
        }
    )
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    
    function onSubmit(e){
        e.preventDefault();
       setIsSubmitted(true);
    }
    
     return (
        <div className="newElement">
            <div className = "leftContent">
            <div className = "button">
                <button type="submit" className="btn" >
                   {/* <FontAwesomeIcon icon={faRocketchat} /> */}
                    VIA SUPPORT CHAT
                </button>
                <button type="submit" className="btn" >
                {/* <FontAwesomeIcon icon={faPhone} /> */}
                    VIA CALL
                </button>
                <button type="submit" className="btn1" >
                {/* <FontAwesomeIcon icon={faRocketchat} /> */}
                    VIA EMAIL FORM
                </button>
                </div>
                <form onSubmit = {onSubmit}>
                <input type="text"
                       placeholder="Your Name"
                       name="Name"
                       value={formData.Name}
                       onChange={(e) =>  setFormData((prev)=>{
                        return {
                            ...prev,
                            [e.target.name]: e.target.value
                        }
                    })}
                       />
                <input type="text"
                       placeholder="Your Email"
                       name="Email"
                       value={formData.Email}
                       onChange={(e) =>  setFormData((prev)=>{
                        return {
                            ...prev,
                            [e.target.name]: e.target.value
                        }
                    })}
                       />
                <textarea 
                        placeholder="Add Comments"
                        name="TextContent"
                       value={formData.TextContent}
                       onChange={(e) => setFormData((prev)=>{
                        return {
                            ...prev,
                            [e.target.name]: e.target.value
                        }
                    })}
                />
            <button type="submit" className="btnLast" value="Submit">Submit</button>
           {isSubmitted && 
            <div>
               {formData.Name && <p>Name = {formData.Name} </p>}
               {formData.Email && <p>Email = {formData.Email} </p>}
               {formData.TextContent && <p>TextContent = {formData.TextContent} </p>}
            </div>
           } 
                </form>
                
            </div>
            <div className="rightContent">
                <img src = "https://img.freepik.com/premium-vector/happy-good-looking-adult-man-use-phone_97632-2069.jpg" alt = "img"/>
            </div>
        </div>
     )
}