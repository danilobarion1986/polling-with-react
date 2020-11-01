import React from "react";
import styled from "styled-components";

const SelectStyled = styled.select`
  outline: none;
`;

function Select(props) {
  const dropdownOptions = Object.keys(props.options).map((opt, index) => {
    return (
      <option key={index} value={opt}>
        {opt}
      </option>
    );
  });

  const getSelectedValue = (e) => {
    const selectedOption = e.target.value;
    props.selected(selectedOption);
    props.setSelectedValue(selectedOption);
  };

  return (
    <SelectStyled onChange={getSelectedValue} value={props.selectedValue}>
      <option value={""} defaultValue hidden>
        {props.defaultOption}
      </option>
      {dropdownOptions}
      <option value={"custom"}>Custom</option>
    </SelectStyled>
  );
}

export default Select;
