export const FormatText = (input) => {
  let singleSpace = input.replace(/\s{2,}/g, ' ');
  let trimmed = singleSpace.trim();
  return trimmed;
}