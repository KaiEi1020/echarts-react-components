/* eslint-disable import/prefer-default-export */

export const pick = (obj: any, keys: any) => {
  const r = {};
  keys.forEach((key: any) => {
    r[key] = obj[key];
  });
  return r;
};
