export function isExitDateAfterEntry({ entryDate, exitDate }) {
  entryDate = new Date(entryDate);
  exitDate = new Date(exitDate);

  entryDate.setHours(0, 0, 0, 0);
  exitDate.setHours(0, 0, 0, 0);

  return entryDate < exitDate;
}
