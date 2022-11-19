export default function Button({ text, color }) {
  return (
    <>
      <button className="btn" style={{ backgroundColor: color }}>
        {text}
      </button>
    </>
  );
}
