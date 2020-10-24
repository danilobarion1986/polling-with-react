import React from "react";
import styled from "styled-components";

const SelectStyled = styled.select`
  outline: none;
`;

function FormSelect(props) {
  const dropdownOptions = props.options.map((opt, index) => {
    return (
      <option key={index} value={opt}>
        {opt}
      </option>
    );
  });

  return (
    <SelectStyled>
      <option value={""} defaultValue hidden>
        {props.defaultOption}
      </option>
      {dropdownOptions}
    </SelectStyled>
  );
}

export default FormSelect;
