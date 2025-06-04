import React from 'react'
import  { useEffect } from 'react';
import '../styles/Contact.css'; // Assuming you have a CSS file for styling
 // Importing Bulma CSS framework

 const Contact = () => {
       const sendEmail = () => {
    const recipient = "gulamnoxbondy@gmail.com";
    const subject = "Hello from my website";
    const body = "This is a test email.";

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  useEffect(() => {
    const fileInput = document.querySelector("#file-js-example input[type=file]");
    const fileName = document.querySelector("#file-js-example .file-name");

    if (fileInput && fileName) {
      fileInput.onchange = () => {
        if (fileInput.files.length > 0) {
          fileName.textContent = fileInput.files[0].name;
        }
      };
    }
  }, []);
  return (
    
    <div className="container-from">
      <div className='row'>
<div className='col-md-6'>
</div>
<div className='col-md-6'>
<div className='form'>
<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input"></input>
  </div>
</div>
<div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" value="bulma"></input>
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>

  <p class="help is-success">This username is available</p>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email input" value="hello@"></input>
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>

    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>

  </div>
  <p class="help is-danger">This email is invalid</p>
</div>

<div class="field">
  <label class="label">Subject</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <label class="label">Message</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea"></textarea>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox"></input>
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="radio">
      <input type="radio" name="question"></input>
      Yes
    </label>
    <label class="radio">
      <input type="radio" name="question"></input>
      No
    </label>
  </div>
</div>

<button class="uk-button uk-button-primary">Submit</button>
</div>
</div>
      </div>
        </div>
        
        

      
    
  );
};
export default Contact;
