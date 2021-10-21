import { TypeFilter } from "utils/fetch/fetchPair";

type DropdownProps = {
  options: any[]; // TODO: fix any;
  setOption: (a: TypeFilter) => void;
  selected: string;
};

const Dropdown = ({ options, setOption, selected }: DropdownProps) => {
  return (
    <select
      className="form-select block mt-1 mb-4 w-28"
      name="selector"
      id="selector"
      onChange={event => setOption(event.target.value as TypeFilter)}
      value={selected}>
      {options.map((opt, i) => (
        <option key={`opt-${i}`} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
