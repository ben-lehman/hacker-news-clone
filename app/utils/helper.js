export function timeConverter(unix_time, show_hour = true) {
  let date = new Date(unix_time * 1000);
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let hour = ((date.getHours() + 11) % 12) + 1;
  let suffix = date.getHours() >= 12 ? 'PM' : 'AM';
  let min = '0' + date.getMinutes();

  if (show_hour === true) {
    return `${day}/${month}/${year}, ${hour}:${min.substr(-2)} ${suffix}`;
  }

  return `${day}/${month}/${year}`;
}
