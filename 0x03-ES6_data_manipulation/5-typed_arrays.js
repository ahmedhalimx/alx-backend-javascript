export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }

  const rawArrayBuffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(rawArrayBuffer, 0, length);
  int8Array.set([value], position);
  return new DataView(rawArrayBuffer);
}
