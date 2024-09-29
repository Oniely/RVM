export function formatTime(time: string) {
  const hour = Number(time.split(':')[0]);
  const minute = Number(time.split(':')[1]);
  const meridiem = hour < 12 ? 'AM' : 'PM';
  const hourFormat = hour < 12 ? hour : hour - 12;
  const newHour = hourFormat < 10 ? `0${hourFormat}` : hourFormat;

  return `${newHour}:${minute}${meridiem}`;
}
