import { format, differenceInHours } from "date-fns";

export function theDate(input) {
  return format(new Date(input), "ddd, MMMM D, YYYY");
}

export function timeDifference(publishedDate) {
  const diff = differenceInHours(new Date(), new Date(publishedDate));

  if (diff < 24) {
    return `${diff}h ago`;
  } else {
    return format(publishedDate, "MMM D");
  }
}
