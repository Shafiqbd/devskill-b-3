import React, { useState } from "react";

const Newsletter = () => {
  const [newsLetter, setNewsLetter] = useState({
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="newsletter">
      <div className="container">
        <div className="w3agile_newsletter_left">
          <h3>sign up for our newsletter</h3>
        </div>
        <div className="w3agile_newsletter_right">
          <form onSubmit={handleSubmit}>
            <input type="email" name="email" value={newsLetter.email} />
            <input type="submit" value="subscribe now" />
          </form>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  );
};

export default Newsletter;
