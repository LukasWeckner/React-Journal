export default function FavouriteButton({ className, children, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
