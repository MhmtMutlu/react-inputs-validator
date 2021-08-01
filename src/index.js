import React from "react";

const Validators = {
  email: () => /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
  password: ({ minLength = 0, maxLength = 10 }) =>
    RegExp(String.raw`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{${minLength},${maxLength}}$`)
};

const TypeLabels = {
  email: "Email",
  password: "Password"
};

export const ValidatedInput = ({ type, errorMessage, ...settings }) => {
  const [error, setError] = React.useState(null);
  const [message, setMessage] = React.useState((settings.message = null));
  const [isFocus, setIsFocus] = React.useState(false);

  const handleOnChange = (e) => {
    e.preventDefault();
    const isValid = e.target.value.match(Validators[type](settings));
    if (isValid === null) {
      setError(errorMessage);
    } else {
      setError(null);
      setMessage(null);
    }
  };

  return (
    <React.Fragment>
      <label htmlFor={"input" + type}>{TypeLabels[type]}</label>
      <br />
      <input
        id={"input" + type}
        type={type}
        onChange={handleOnChange}
        onFocus={(e) => setIsFocus(true)}
        style={{ color: error ? "gray" : "green" }}
      />
      {isFocus && message && (
        <React.Fragment>
          <br />
          <span id="info-message">{message}</span>
        </React.Fragment>
      )}
      <br />
      <span id="error-message" style={{ color: "red" }}>
        {error && error}
      </span>
    </React.Fragment>
  );
};
