import SubmitButton from "../SubmitButton";
import "./Form.css";

export default function Form({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddEntry(data);
    event.target.reset();
  }

  return (
    <>
      <form className="form" aria-labelledby="title" onSubmit={handleSubmit}>
        <h2 className="form__title" id="title">
          New Entry
        </h2>
        <label htmlFor="entry-title">Motto</label>
        <input
          className="form__inputs"
          htmlFor="entry-title"
          id="entry-title"
          name="motto"
        />
        <label className="form__content-label" htmlFor="entry-content">
          Notes
        </label>
        <textarea
          className="form__inputs"
          rows={5}
          htmlFor="entry-content"
          id="entry-content"
          name="notes"
        ></textarea>
        <SubmitButton>Create</SubmitButton>
      </form>
    </>
  );
}
