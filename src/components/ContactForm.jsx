import React, { useState } from "react";
import Input from "./Input";
export default function ContactForm() {
  const inputs = [
    {
      name: "Name",
      type: "text",
    },
    {
      name: "Message",
      type: "text-area",
    },
  ];
  const [value, setValue] = useState({
    name: "",
    message: "",
  });

  const updateInput = (name, updatedVal) => {
    setValue({ ...value, [name]: updatedVal });
  };
  return (
    <form className="contact-form">
      {inputs.map((input, index) => (
        <Input
          name={input.name}
          type={input.type}
          value={value[input.name.toLowerCase()]}
          updateInput={updateInput}
          key={`name-${index}`}
        />
      ))}
      <button
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `mailto:haneefmhmmd@gmail.com?subject=${value.name}-Connect Request&body=${value.message}`;
        }}
        className="btn btn--primary submit-btn"
      >
        <span className="btn__label">Send mail</span>
      </button>
    </form>
  );
}
