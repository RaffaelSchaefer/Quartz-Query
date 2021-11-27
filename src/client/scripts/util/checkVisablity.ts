export function checkVisablity(element: any) {
  let style = window.getComputedStyle(element);
  return style.display === "none";
}
