import React  from "react";
import '../Step8/step8.css'

export default  function SelectBox({ selectHook,color }) {
    return (
      <select className="select_box" style={{ borderStyle: "none",color:color}} value={selectHook.selectedOption} onChange={selectHook.handleChange} >
        {selectHook.options.map((option) => (
          <option key={option.value} value={option.value}  style={{color:"black"}}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
  

  // function CustomSelect({ selectHook, style }) {
  //   return (
  //     <select
  //       value={selectHook.selectedOption}
  //       onChange={selectHook.handleChange}
  //       style={style} // Pass the style prop to the select element
  //     >
  //       {selectHook.options.map((option) => (
  //         <option key={option.value} value={option.value} style={{ color: style.color }}>
  //           {option.label}
  //         </option>
  //       ))}
  //     </select>
  //   );
  // }