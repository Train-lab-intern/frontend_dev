/* eslint-disable */
import './CustomSelect.scss';
import React, { useState } from 'react';
import arrowSlider from '../../assets/icons/arrowSlider';

interface CustomSelectProps {
  specialityList: Array<string>;
  userSpeciality: Array<string>;
  maxSelectedItem: number;
  callback: Function;
}

export default function CustomSelect(props: CustomSelectProps) {
  const { specialityList, userSpeciality, maxSelectedItem, callback } = props;
  const [isActive, setActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState(new Set(userSpeciality));
  const [specList, setSpecList] = useState(specialityList);

  const changeActive = () => {
    setActive(!isActive);
  };

  const deleteSpeciality = (value: string) => {
    selectedItem.delete(value);
    setSelectedItem(new Set(selectedItem));
    callback(selectedItem);
  };

  const addSpeciality = (value: string) => {
    setSelectedItem(new Set(selectedItem.add(value)));
    callback(selectedItem);
  };

  const changeSpeciality = (event: { target: HTMLInputElement }) => {
    const { target } = event;
    const { value } = target;
    return target.checked ? addSpeciality(value) : deleteSpeciality(value);
  };

  const removeSpeciality = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget;
    deleteSpeciality(target.name);
  };

  return (
    <div className={`CustomSelect ${isActive ? 'Active' : ''}`}>
      <div className="CustomSelect-SelectedItems">
        {Array.from(selectedItem).map((item) => (
          <button
            type="button"
            className="CustomSelect-SelectedItems--Item"
            key={item}
            onClick={removeSpeciality}
            name={item}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="CustomSelect-Header" onClick={changeActive}>
        <div className="CustomSelect-Header--Placeholder">
          Choose your specialization
        </div>
        <div className="CustomSelect-Header--Arrow">{arrowSlider}</div>
      </div>
      <div className="CustomSelect-Body">
        {specList.map((item) => (
          <label className="CustomSelect-Body--Item" key={item}>
            <input
              type="checkbox"
              value={item}
              disabled={
                !(selectedItem.size < maxSelectedItem || selectedItem.has(item))
              }
              onChange={changeSpeciality}
              checked={selectedItem.has(item)}
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
}
