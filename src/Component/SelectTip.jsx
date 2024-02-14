export default function SelectTip() {
  return (
    <div>
      <p>Select Tip %</p>
      <div className="percentage">
        <div className="darkgreen percentage_box" value="0.05">
          5%
        </div>
        <div className="darkgreen percentage_box" value="0.1">
          10%
        </div>
        <div className="darkgreen percentage_box" value="0.15">
          15%
        </div>
        <div className="darkgreen percentage_box" value="0.25">
          25%
        </div>
        <div className="darkgreen percentage_box" value="0.5">
          50%
        </div>
        <input
          className="lightgreen percentage_box"
          placeholder="Custom"
          id="custom"
        />
      </div>
    </div>
  );
}
