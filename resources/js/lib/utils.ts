export function formatDate(date: string) {
  const month = Number(date.split('-')[0]);
  const day = Number(date.split('-')[1]);
  const year = Number(date.split('-')[2]);

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const formattedDate = `${monthNames[month - 1]} ${day}, 20${year}`;

  return formattedDate;
}

export function formatTime(time: string) {
  const hour = Number(time.split(':')[0]);
  const minute = Number(time.split(':')[1]);
  const meridiem = hour < 12 ? 'AM' : 'PM';
  const hourFormat = hour < 12 ? hour : hour - 12;
  const newHour = hourFormat < 10 ? `0${hourFormat}` : hourFormat;

  return `${newHour}:${minute}${meridiem}`;
}

export function getPercentage(part: number, total: number = 20) {
  if (total === 0) {
    return 0;
  }
  return (part / total) * 100;
}
