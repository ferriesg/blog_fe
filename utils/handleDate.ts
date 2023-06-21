function handleDate(date: any) {
  const newDate = new Date(date);
  const DD = String(newDate.getDate()).padStart(2, "0"); // get day
  const MM = String(newDate.getMonth() + 1).padStart(2, "0"); //get month
  const yyyy = newDate.getFullYear(); // get year

  // Time
  const hh = String(newDate.getHours()).padStart(2, "0"); //get hour
  const mm = String(newDate.getMinutes()).padStart(2, "0"); //get minute
  const ss = String(newDate.getSeconds()).padStart(2, "0"); //get second
  const resDate = yyyy + "-" + MM + "-" + DD + " " + hh + ":" + mm + ":" + ss;
  return resDate;
}

export default handleDate;
