export function addLeadingZero(number) {
  return number > 9 ? number : "0" + number;
}

export function shortSummary(summary) {
  return summary.slice(0, 75);
}

export function sliceArticals(articals, number) {
  return articals.slice(0, number);
}

export function formatSection(section, subsection) {
  return subsection === "" ? section : `${section} - ${subsection}`;
}
