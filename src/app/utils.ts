export const isDefined = <T>(test: T | undefined): test is T => {
  return test !== undefined;
};

export const isNot = <A, B>(guard: (test: A | B) => test is A) => {
  return (test: Parameters<typeof guard>[0]): test is B => !guard(test);
};

export const isUndefined = isNot<any, undefined>(isDefined);
