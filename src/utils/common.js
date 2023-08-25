export const isEmpty = (string) => {
  if (string != null && string.length > 0) {
    return false;
  }
  return true;
};

export const ucFirst = (str) => {
  if (str == null || str == '') {
    return '';
  }
  return str.split(' ').map(s => s.charAt(0).toUpperCase() + s.substr(1).toLowerCase()).join(' ');
};