const { pow, floor } = Math;
const TWO_POW_32 = pow(2, 32);

/**
 * Mimic Java's ByteBufffer with big endian order
 */
class ByteBuffer {
  position: number;

  data: Uint8Array;

  int32ArrayForConvert: Uint32Array;
  int8ArrayForConvert: Uint8Array;

  static allocate(size = 16): ByteBuffer {
    return new ByteBuffer(new Uint8Array(size));
  }

  constructor(data: Uint8Array) {
    this.position = 0;
    this.data = data;
    this.int32ArrayForConvert = new Uint32Array(1);
    this.int8ArrayForConvert = new Uint8Array(this.int32ArrayForConvert.buffer);
  }

  put(value: number) {
    if (this.position === this.data.length) {
      const oldArray = this.data;
      this.data = new Uint8Array(this.data.length * 2);
      this.data.set(oldArray);
    }
    this.data[this.position] = value;
    this.position++;
  }

  putInt32(value: number) {
    if (this.data.length - this.position < 4) {
      const oldArray = this.data;
      this.data = new Uint8Array(this.data.length * 2 + 4);
      this.data.set(oldArray);
    }
    this.int32ArrayForConvert[0] = value;
    this.data.set(this.int8ArrayForConvert.reverse(), this.position);
    this.position += 4;
  }

  putInt64(value: number) {
    this.putInt32(floor(value / TWO_POW_32));
    this.putInt32(value);
  }

  putArray(array: Uint8Array) {
    if (this.data.length - this.position < array.byteLength) {
      const oldArray = this.data;
      this.data = new Uint8Array(this.position + array.byteLength);
      this.data.set(oldArray);
    }
    this.data.set(array, this.position);
    this.position += array.byteLength;
  }

  get(): number {
    const value = this.data[this.position];
    this.position++;
    return value;
  }

  getInt32(): number {
    this.int8ArrayForConvert.set(
      this.data.slice(this.position, this.position + 4).reverse()
    );
    const value = this.int32ArrayForConvert[0];
    this.position += 4;
    return value;
  }

  getInt64(): number {
    const high = this.getInt32();
    const low = this.getInt32();
    return high * TWO_POW_32 + low;
  }

  resetPosition() {
    this.position = 0;
  }
}

export default ByteBuffer;
