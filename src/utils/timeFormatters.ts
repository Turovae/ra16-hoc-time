import moment from "moment";

function getTimePassed(time: string): string {
  const now = moment();
  let timeAgo = now.diff(time, "minute");

  if (timeAgo < 60) {
    return `${timeAgo} минут назад`;
  }

  timeAgo = now.diff(time, "hour");
  if (timeAgo < 24) {
    return `${timeAgo} часов назад`;
  }

  timeAgo = now.diff(time, "day");
  return timeAgo + " дней назад";
}

export { getTimePassed };
