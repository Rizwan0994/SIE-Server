// // import React from 'react';
// // import { Select, MenuItem, FormControl, InputLabel, Box, styled } from '@mui/material';

// // // Define a styled component to remove the border
// // const NoBorderSelect = styled(Select)({
// //   border: 'none',
// // });

// // const YearMonthPicker = ({ selectedYear, selectedMonth, onYearChange, onMonthChange }) => {
// //   const years = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);
// //   const months = [
// //     'January', 'February', 'March', 'April', 'May', 'June', 'July',
// //     'August', 'September', 'October', 'November', 'December',
// //   ];

// //   return (
// //     <div>
// //       <Box display="flex" alignItems="center">
// //         <FormControl>
// //           <InputLabel>Select a Year</InputLabel>
// //           <NoBorderSelect
// //             value={selectedYear}
// //             onChange={(e) => onYearChange(e.target.value)}
// //           >
// //             {years.map((year) => (
// //               <MenuItem key={year} value={year}>
// //                 {year}
// //               </MenuItem>
// //             ))}
// //           </NoBorderSelect>
// //         </FormControl>
// //         <div className="vertical-bar">|</div>
// //         <FormControl>
// //           <InputLabel>Select a Month</InputLabel>
// //           <NoBorderSelect
// //             value={selectedMonth}
// //             onChange={(e) => onMonthChange(e.target.value)}
// //           >
// //             {months.map((month, index) => (
// //               <MenuItem key={month} value={index + 1}>
// //                 {month}
// //               </MenuItem>
// //             ))}
// //           </NoBorderSelect>
// //         </FormControl>
// //       </Box>
// //     </div>
// //   );
// // };

// // export default YearMonthPicker;

import React from 'react';
import useYearMonthSelect from './SelectYearMonth';

function YearMonthPicker() {
  const { years, months, yearSelect, monthSelect } = useYearMonthSelect();
  console.log( yearSelect.selectedValue , monthSelect.selectedValue)

  return (
    <div style={{width:"fit-content",border:"rgb(186 185 185) solid 1px",display:"flex" ,borderRadius:"8px",padding:"7%"}}>
      <div>
        <select style={{borderStyle:"none"}} value={yearSelect.selectedValue} onChange={yearSelect.handleChange}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div style={{ borderRight: '1px solid rgb(186 185 185)', height: 'auto', margin: '0 10px' }}></div>
      <div>
        <select style={{borderStyle:"none"}} value={monthSelect.selectedValue} onChange={monthSelect.handleChange}>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default YearMonthPicker;