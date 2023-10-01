import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import {
  send,
  sendHover,
  telegram,
  telegramHover,
  linkedin,
  linkedinHover,
} from "../img";
import Notiflix from "notiflix";

export const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [telegramSrc, setTelegramSrc] = useState(telegram);
  const [linkedinSrc, setLinkedinSrc] = useState(linkedin);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleTelegramHover = () => {
    setTelegramSrc(telegramHover);
  };

  const handleTelegramOut = () => {
    setTelegramSrc(telegram);
  };

  const handleLinkedinHover = () => {
    setLinkedinSrc(linkedinHover);
  };

  const handleLinkedinOut = () => {
    setLinkedinSrc(linkedin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateEmail(form.email)) {
      setLoading(false);
      Notiflix.Notify.failure("Please enter a valid email address.");
      return;
    }

    if (form.name.length < 3) {
      setLoading(false);
      Notiflix.Notify.failure("Name must be at least 3 characters long.");
      return;
    }

    if (form.message.length < 10) {
      setLoading(false);
      Notiflix.Notify.failure("Message must be at least 10 characters long.");
      return;
    }

    const messageWithSenderEmail = `Email: ${form.email}\n\n${form.message}`;

    emailjs
      .send(
        "service_5ctmt1q",
        "template_88saxup",
        {
          from_name: form.name,
          to_name: "Ihor Hromadskyi",
          from_email: form.email,
          to_email: "gromadskiyigor@gmail.com",
          message: messageWithSenderEmail,
        },
        "VNBfcGvc_SXd_9Avk"
      )
      .then(
        () => {
          setLoading(false);
          Notiflix.Notify.success(
            "Thank you. Your message is already flying to me."
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          Notiflix.Notify.failure("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className="-mt-[1rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden "
    >
      <div className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins"
        >
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
              required
            />
          </label>
          <div className="flex justify-start items-center gap-1 lxs:gap-3 xs:gap-5">
            <button
              type="submit"
              className="live-demo flex justify-center sm:gap-4 
              gap-3 sm:text-[20px] text-[16px] text-timberWolf 
              font-bold font-beckman items-center py-5
              whitespace-nowrap sm:w-[130px] sm:h-[50px] 
              w-[100px] h-[45px] rounded-[10px] bg-night 
              hover:bg-battleGray hover:text-eerieBlack 
              transition duration-[0.2s] ease-in-out"
              onMouseOver={() => {
                document
                  .querySelector(".contact-btn")
                  .setAttribute("src", sendHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector(".contact-btn")
                  .setAttribute("src", send);
              }}
            >
              {loading ? "Sending" : "Send"}
              <img
                src={send}
                alt="send"
                className="contact-btn sm:w-[26px] sm:h-[26px] 
                w-[23px] h-[23px] object-contain transition duration-200"
              />
            </button>
            <span>OR</span>
            <a
              href="https://t.me/igoora"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center w-[50px] h-[50px] rounded-[10px] items-center bg-night 
              hover:bg-battleGray hover:text-eerieBlack 
              transition duration-[0.2s] ease-in-out"
              onMouseOver={handleTelegramHover}
              onMouseOut={handleTelegramOut}
            >
              <img
                src={telegramSrc}
                alt="Telegram"
                className="w-[30px] h-[30px] object-contain transition duration-200"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/igoora/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center w-[50px] h-[50px] rounded-[10px] items-center bg-night 
              hover:bg-battleGray hover:text-eerieBlack 
              transition duration-[0.2s] ease-in-out"
              onMouseOver={handleLinkedinHover}
              onMouseOut={handleLinkedinOut}
            >
              <img
                src={linkedinSrc}
                alt="LinkedIn"
                className="w-[35px] h-[35px] object-contain transition duration-200"
              />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
