export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded bg-blue-600 px-4 py-2 text-white"
    >
      {children}
    </button>
  );
}
