import "./ContactPageTwo.css";

const ContactPageTwo = () => {
  return (
    <div className="ContactTwoContainer">
      <div className="ContactTwoWrapper">
        <div className="TextArea">
          <button>Contact Form</button>
          <h1>
            <span style={{ color: "#5f2a5d" }}>Do you have a question?</span>
            <span style={{ color: "#ff885e" }}>Feel free to contact</span>
          </h1>
        </div>
        <div className="FillName">
          <div className="TextAndEmail">
            <input type="text" placeholder="Full Name*" />
            <input type="email" placeholder="Email*" />
          </div>
          <div className="Message">
            <input type="text" placeholder="Your Message*" />
          </div>
          <button>Send a message</button>
        </div>
      </div>
    </div>
  );
};

export default ContactPageTwo;
