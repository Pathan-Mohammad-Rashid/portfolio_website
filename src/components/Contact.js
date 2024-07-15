import React from 'react';

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
      <h3>Connect with me:</h3>
      <ul>
        <li>Email: abc@gmail.com</li>
        <li>Phone: +91 9999999999</li>
        <li><a href="https://www.linkedin.com">LinkedIn</a></li>
        <li><a href="https://www.github.com">GitHub</a></li>
      </ul>
    </div>
  );
}

export default Contact;
