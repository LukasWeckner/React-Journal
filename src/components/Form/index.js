import Button from "../Button";
import "./Form.css";

export default function Form() {
  return (
    <>
      <form className="form" aria-labelledby="title">
        <h2 className="form__title" id="title">
          New Entry
        </h2>
        <label htmlFor="entry-title">Motto</label>
        <input
          className="form__inputs"
          htmlFor="entry-title"
          id="entry-title"
          name="entry-title"
        />
        <label className="form__content-label" htmlFor="entry-content">
          Notes
        </label>
        <textarea
          className="form__inputs"
          rows={5}
          htmlFor="entry-content"
          id="entry-content"
          name="entry-content"
        ></textarea>
        <Button>Create</Button>
      </form>
    </>
  );
}
