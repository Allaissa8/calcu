import React from 'react';

function NumberInput({value,onChange,placeholder})
 {
  return <input type="text" value={value} onChange={onChange} placeholder={placeholder} />;
}

export default NumberInput;
