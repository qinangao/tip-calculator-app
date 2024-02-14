export default function InputBox({ title, onValue, onSetValue }) {
  return (
    <div>
      <p className="toptitle">{title}</p>
      <div className="inputbox">
        <input
          type="text"
          placeholder="0"
          value={onValue}
          onChange={(e) => onSetValue(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
