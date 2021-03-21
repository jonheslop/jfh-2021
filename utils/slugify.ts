export const slugify = (string: string) => {
  return string.toLowerCase().replace(/\s+/g, '-');
};
