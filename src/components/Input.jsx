import React from "react";

export default function Input({
  name,
  type = "text",
  value,
  errorMsg = null,
  updateInput,
}) {
  const handleInputChange = (e) => {
    updateInput(name.toLowerCase(), e.target.value);
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={name.toLowerCase()} className="input-label">
        {name}
      </label>
      {type === "text-area" ? (
        <textarea
          className="input input--textarea"
          name={name}
          rows="5"
          value={value}
          onChange={handleInputChange}
          id={name.toLowerCase()}
        />
      ) : (
        <input
          type={type}
          className="input"
          name={name.toLowerCase()}
          value={value}
          onChange={handleInputChange}
          id={name.toLowerCase()}
        />
      )}
      {errorMsg !== null && <p className="input-error">{errorMsg}</p>}
    </div>
  );
}
