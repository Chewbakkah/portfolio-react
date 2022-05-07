import { useEffect, useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import LogoLG from "../../assets/images/ce-logo-wht.png";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cgcoyck",
        "template_irp5fu8",
        form.current,
        "_d8B5UgXYlKH8N3kl"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className="container-fluid contact-page">
        <div className="row align-items-center">
          <div className="contact-form-holder col-xl-6">
            <h1>Contact Me:</h1>
            <p>
              Do you have a great position to fill at an equally great company?
              <br />
              This contact page is for you!
            </p>
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <div className="container-fluid padding-zero">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <ul>
                        <li className="half">
                          <input
                            placeholder="Your Name"
                            type="text"
                            name="name"
                            className="submit-text"
                            required
                          />
                        </li>
                        <li className="half">
                          <input
                            placeholder="Reply Email"
                            type="email"
                            name="email"
                            className="submit-text"
                            required
                          />
                        </li>
                        <li>
                          <input
                            placeholder="Email Subject"
                            type="text"
                            name="subject"
                            className="submit-text"
                            required
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-8 input-area">
                      <textarea
                        placeholder="Email Message"
                        name="message"
                        className="submit-text"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </div>
                {/* <ul>
                <li className="half">
                  <input
                    placeholder="Your Name"
                    type="text"
                    name="name"
                    className="submit-text"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Reply Email"
                    type="email"
                    name="email"
                    className="submit-text"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Email Subject"
                    type="text"
                    name="subject"
                    className="submit-text"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Email Message"
                    name="message"
                    className="submit-text"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul> */}
              </form>
            </div>
          </div>
          <div className="contact-logo-holder col-xl-6">
            <img className="contact-logo" src={LogoLG} alt="CAE" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
