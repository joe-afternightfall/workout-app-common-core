const ONLY_NUMBERS_REGEX = new RegExp('^[0-9]*$');

export const validateForOnlyNumbers = (value: string): boolean => {
  return ONLY_NUMBERS_REGEX.test(value);
};
