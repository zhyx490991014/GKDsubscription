export const tryRun = <T>(fc: () => T, fallbackFc: (e: unknown) => T) => {
  try {
    return fc();
  } catch (e) {
    return fallbackFc(e);
  }
};

export const orderList: number[] = [
  -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1,
];
