export default function Result() {
  return (
    <div className="part2 amountbox">
      <div class="top_box">
        <div class="tip_amount">
          Tip Amount
          <p class="person">/ person</p>
        </div>
        <div class="result" id="tip_amount">
          $0.00
        </div>
      </div>
      <div class="bottom_box">
        <div class="total_amount">
          Total
          <p class="person">/ person</p>
        </div>
        <div class="result" id="total_amount">
          $0.00
        </div>
      </div>
      <button class="graygreen">Reset</button>
    </div>
  );
}
