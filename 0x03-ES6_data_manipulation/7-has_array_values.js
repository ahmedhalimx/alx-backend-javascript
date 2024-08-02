/* eslint-disable array-callback-return */
export default function hasValuesFromArray(set, array) {
  let isEqual = true;
  array.map((element) => {
    if (!set.has(element)) {
      isEqual = false;
    }
  });
  return isEqual;
}
