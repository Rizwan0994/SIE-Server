import { useYearSelect, useMonthSelect } from './UseSelect';

function useYearMonthSelect() {
  const years = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December',
  ];
 
  const yearSelect = useYearSelect('2023'); // Initial value for year
  const monthSelect = useMonthSelect('January');

  return {
    years,
    months,
    yearSelect,
    monthSelect,
  };
}

export default useYearMonthSelect;
