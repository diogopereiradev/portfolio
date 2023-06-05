export function getDateDiff(date: Date, date2?: Date) {
  const currentDate = new Date(Date.now()).getTime();
  const hasSecondDate = date2? date2.getTime() : currentDate;
  const diffTime = Math.abs(hasSecondDate - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  const years = Math.floor(diffDays / 365);
  const months = Math.floor(diffDays % 365 / 30);
  return {
    years,
    months
  };
}