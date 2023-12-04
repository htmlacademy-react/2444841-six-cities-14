export default function convertDate(date: string): string {

  const months: string[] = [
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
    'December'
  ];

  return `${months[new Date(date).getMonth()]} ${new Date(date).getFullYear()}`;
}
