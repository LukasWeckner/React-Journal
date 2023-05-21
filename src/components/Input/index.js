export default function Input({ name, id, htmlFor }) {
  return (
    <>
      <label htmlFor={htmlFor}>Motto</label>
      <input id={id} name={name}></input>
    </>
  );
}
