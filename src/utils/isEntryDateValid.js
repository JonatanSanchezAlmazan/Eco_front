export function isEntryDateValid({ date }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const entry = new Date(date);
  entry.setHours(0, 0, 0, 0);

  return entry >= today;
}
