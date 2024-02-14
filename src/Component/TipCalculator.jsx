import InputBox from "./InputBox";
import SelectTip from "./SelectTip";
export default function TipCalculator({
  bill,
  selectTip,
  numberOfPpl,
  onSetBill,
  onSetNumberOfPpl,
}) {
  return (
    <div className="part1">
      <InputBox title="Bill" onValue={bill} onSetValue={onSetBill} />
      <SelectTip onSelectTip={selectTip} />
      <InputBox
        title="Number of people"
        onValue={numberOfPpl}
        onSetValue={onSetNumberOfPpl}
      />
    </div>
  );
}
