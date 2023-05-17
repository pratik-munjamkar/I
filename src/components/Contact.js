import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

/**
 * A functional component that renders a contact form and sends an email using emailjs.
 * @returns The rendered contact form.
 */
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_72qmaav",
        "template_vmu55kd",
        form.current,
        "xNvefg3J_TvMwVtpe"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div class="animate__animated animate__jello animate__delay-2s	2s">
      <h1>CONTACT US </h1>

      <h3> Send your queries </h3>
      <form ref={form} onSubmit={sendEmail} width="500px">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
