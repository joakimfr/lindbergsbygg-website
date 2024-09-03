import "./styles.scss";

export const Form = () => {
  return (
    <form className="form">
      <h2 className="form__title">Skriv till oss!</h2>
      <input
        type="text"
        id="name"
        name="name"
        required
        className="form__input"
        placeholder="Namn"
      />
      <div className="form__row">
        <input
          type="text"
          id="phone"
          name="phonenumber"
          required
          className="form__input form__rowInput"
          placeholder="Telefonnummer"
        />
        <input
          type="email"
          id="email"
          name="email"
          required
          className="form__input form__rowInput"
          placeholder="Email"
        />
      </div>
      <textarea
        id="message"
        name="message"
        required
        placeholder="Meddelande"
        className="form__input"
      />
      <button className="form__button">Skicka</button>
    </form>
  );
};
