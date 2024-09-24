export default function Button({ title, className, onClick }) {
  return (
    <button onClick={onClick} className={className}>
      {title}
    </button>
  );
}
