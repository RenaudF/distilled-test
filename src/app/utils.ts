export const isDefined = <T>(test: T | undefined): test is T => {
  return test !== undefined;
};
