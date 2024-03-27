import "./CustomSelect.scss"
import {arrowSlider} from "../../assets/icons/arrowSlider"
import { useState } from "react"

export const CustomSelect = (props:{specialityList:Array<string>, userSpeciality:Array<string>, callback:Function}) => {

  const spec = ["BA", "QA Manual", "AQA Pyton", "AQ/AQA", "PM", "Java developer", "JS developer", "Project manager", "Product owner", "System analyst"]
  const userSpec =[ "Java developer", "JS developer"];

  const [isActive, setActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState(new Set(props.userSpeciality));
  const [specList, setSpecList] = useState(props.specialityList);

  const maxSelectedItem = 3;

  const chengeActive = () => {
    setActive(!isActive);
  };

  const changeSpeciality = (event: { target: HTMLInputElement }) => {
    const target = event.target;
    const value = target.value;
    target.checked ? addSpeciality(value) : deleteSpeciality(value)
  }

  const deleteSpeciality = (value:string) => {
    selectedItem.delete(value);
    setSelectedItem(new Set(selectedItem));
    props.callback(selectedItem);
  }

  const addSpeciality = (value:string) => {
    setSelectedItem(new Set(selectedItem.add(value)))
    props.callback(selectedItem);
  }

  const removeSpeciality = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget;
    deleteSpeciality(target.name);
  }

  return (
    <div className={`CustomSelect ${isActive ? "Active" : ""}`}>
      <div className="CustomSelect-SelectedItems">
        {Array.from(selectedItem).map(item => (<button className="CustomSelect-SelectedItems--Item" key={item} onClick={removeSpeciality} name={item}>{item}</button>))}
      </div>
      <div className="CustomSelect-Header" onClick={chengeActive}>
        <div className="CustomSelect-Header--Placeholder">Choose your specialization</div>
      <div className="CustomSelect-Header--Arrow">{arrowSlider}</div>
    </div>
    <div className="CustomSelect-Body">
      {(specList).map((item) => (
        <label className="CustomSelect-Body--Item" key={item} >
          <input type="checkbox" value={item} disabled={selectedItem.size < maxSelectedItem || selectedItem.has(item) ? false : true} onChange={changeSpeciality} checked={selectedItem.has(item)}/>
          {item}
        </label>
      ))}
    </div>
    </div>
  )
}