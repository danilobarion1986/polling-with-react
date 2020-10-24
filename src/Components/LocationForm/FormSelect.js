import React from "react";
import styled from "styled-components";

const SelectStyled = styled.select`
  outline: none;
`;

function FormSelect(props) {
  const dropdownOptions = Object.keys(props.options).map((opt, index) => {
    return (
      <option key={index} value={opt}>
        {opt}
      </option>
    );
  });

  const getSelectedValue = (e) => {
    props.selected(e.target.value);
  };

  return (
    <SelectStyled onChange={getSelectedValue}>
      <option value={""} defaultValue hidden>
        {props.defaultOption}
      </option>
      {dropdownOptions}
    </SelectStyled>
  );
}

export default FormSelect;
