const Contact = () => {

    return (
    <>
    <div className="content">
        <h1>Contact Me:</h1>
        <h2>My email address is: <h3>carlopcaballero@gmail.com</h3></h2>
        <h2>My github page can be found here: <h3>https://github.com/C-Caballer0</h3></h2>
        <h2>Mu LinkedIn profile can be found here: <h3>https://www.linkedin.com/in/carlo-caballero-a38741163/</h3></h2>
        
        <div className="messageFields">

        <h1>Or send me a quick message!</h1>
        <label for="name">First name:</label>
        <input type="text" id="name" name="fname"/>
        <label for="email">Email:</label>
        <input type="text" id="email" name="lname"/>
        <div className="messageBox">
        <textarea id="message">Add message here!</textarea>
            </div>
        <input type="submit" value="Submit"/>
        </div>
    </div>
    </>
    );
};


export default Contact;