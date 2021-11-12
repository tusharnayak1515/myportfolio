import React, { useState, useRef } from "react";
import emailjs, { init } from "emailjs-com";

import styles from "./contact.module.css";

const Contact = () => {
  const [formValue, setFormValue] = useState({
    from_name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const form = useRef();

  const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const user_id = process.env.REACT_APP_EMAILJS_USER_ID;
  init(user_id);

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        service_id,
        template_id,
        form.current,
        user_id
      );
      // console.log(result.text);
    } catch (error) {
      console.log(error);
    }
    setFormValue({from_name: "", email: "", message: ""})
  };

  return (
    <div id={styles.contact}>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Full Name"
          name="from_name"
          value={formValue.from_name}
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          value={formValue.email}
          onChange={onChange}
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
          value={formValue.message}
          onChange={onChange}
        ></textarea>
        <div id={styles.submit}>
          <button>SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
