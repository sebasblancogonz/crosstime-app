
export const monthName = (date: Date) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[date.getMonth()];
};

export const isDatePassed = (date: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
};

export const isDateSelected = (date: Date, dateSelected: Date) => {
  return (
    date.getDate() === dateSelected.getDate() &&
    date.getMonth() === dateSelected.getMonth() &&
    date.getFullYear() === dateSelected.getFullYear()
  );
};

export const calculateDateObjects = (since: Date, until: Date) => {
  const dateObjects = [];
  since.setHours(0, 0, 0, 0);
  until.setHours(0, 0, 0, 0);
  let currentDate = new Date(since);
  while (currentDate <= until) {
    dateObjects.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dateObjects;
};
