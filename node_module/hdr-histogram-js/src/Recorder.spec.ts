import Recorder from "./Recorder";
import Int32Histogram from "./Int32Histogram";
import PackedHistogram from "./PackedHistogram";
import JsHistogram from "./JsHistogram";
import { initWebAssembly, WasmHistogram } from "./wasm";

describe("Recorder", () => {
  beforeAll(initWebAssembly);

  it("should record value", () => {
    // given
    const recorder = new Recorder();
    // when
    recorder.recordValue(123);
    // then
    const histogram = recorder.getIntervalHistogram();
    expect(histogram.totalCount).toBe(1);
  });

  it("should record value in a packed histogram", () => {
    // given
    const recorder = new Recorder({
      numberOfSignificantValueDigits: 5,
      bitBucketSize: "packed",
    });
    // when
    recorder.recordValue(123);
    // then
    expect(recorder.getIntervalHistogram() instanceof PackedHistogram).toBe(
      true
    );
    expect(recorder.getIntervalHistogram() instanceof PackedHistogram).toBe(
      true
    );
  });

  it("should record value in a WASM histogram", () => {
    // given
    const recorder = new Recorder({
      numberOfSignificantValueDigits: 5,
      bitBucketSize: "packed",
      useWebAssembly: true,
    });
    try {
      // when
      recorder.recordValue(123);
      // then
      expect(recorder.getIntervalHistogram() instanceof WasmHistogram).toBe(
        true
      );
    } finally {
      recorder.destroy();
    }
  });

  it("should record value with count", () => {
    // given
    const recorder = new Recorder();
    // when
    recorder.recordValueWithCount(123, 3);
    // then
    const histogram = recorder.getIntervalHistogram();
    expect(histogram.totalCount).toBe(3);
  });

  it("should record value with expected interval", () => {
    // given
    const recorder = new Recorder();
    // when
    recorder.recordValueWithExpectedInterval(223, 100);
    // then
    const histogram = recorder.getIntervalHistogram();
    expect(histogram.totalCount).toBe(2);
  });

  it("should record value in a packed histogram", () => {
    // given
    const recorder = new Recorder({ bitBucketSize: "packed" });
    recorder.recordValue(42);
    // when
    const histogram = recorder.getIntervalHistogram();
    // then
    expect(histogram instanceof PackedHistogram).toBe(true);
  });

  it("should record value only on one interval histogram", () => {
    // given
    const recorder = new Recorder();
    // when
    recorder.recordValue(123);
    const firstHistogram = recorder.getIntervalHistogram();
    // then
    const secondHistogram = recorder.getIntervalHistogram();
    expect(secondHistogram.totalCount).toBe(0);
  });

  it("should not record value on returned interval histogram", () => {
    // given
    const recorder = new Recorder();
    const firstHistogram = recorder.getIntervalHistogram();
    const secondHistogram = recorder.getIntervalHistogram();
    // when
    firstHistogram.recordValue(42); // should have 0 impact on recorder
    const thirdHistogram = recorder.getIntervalHistogram();
    // then
    expect(thirdHistogram.totalCount).toBe(0);
  });

  it("should return interval histograms with expected significant digits", () => {
    // given
    const recorder = new Recorder({ numberOfSignificantValueDigits: 4 });
    const firstHistogram = recorder.getIntervalHistogram();
    const secondHistogram = recorder.getIntervalHistogram();
    // when
    const thirdHistogram = recorder.getIntervalHistogram();
    // then
    expect((thirdHistogram as JsHistogram).numberOfSignificantValueDigits).toBe(
      4
    );
  });

  it("should return recycled histograms when asking for interval histogram", () => {
    // given
    const recorder = new Recorder();
    const firstHistogram = recorder.getIntervalHistogram();
    // when
    const secondHistogram = recorder.getIntervalHistogram(firstHistogram);
    const thirdHistogram = recorder.getIntervalHistogram();
    // then
    expect(thirdHistogram === firstHistogram).toBe(true);
  });

  it("should throw an error when trying to recycle an histogram not created by the recorder", () => {
    // given
    const recorder = new Recorder();
    const somehistogram = new Int32Histogram(1, 2, 3);
    // when & then
    expect(() => recorder.getIntervalHistogram(somehistogram)).toThrowError();
  });

  it("should reset histogram when recycling", () => {
    // given
    const recorder = new Recorder();
    recorder.recordValue(42);
    const firstHistogram = recorder.getIntervalHistogram();
    // when
    const secondHistogram = recorder.getIntervalHistogram(firstHistogram);
    const thirdHistogram = recorder.getIntervalHistogram();
    // then
    expect(thirdHistogram.totalCount).toBe(0);
  });

  it("should set timestamps on first interval histogram", () => {
    // given
    let currentTime = 42;
    let clock = () => currentTime;
    const recorder = new Recorder({}, clock);
    // when
    currentTime = 123;
    const histogram = recorder.getIntervalHistogram();
    // then
    expect(histogram.startTimeStampMsec).toBe(42);
    expect(histogram.endTimeStampMsec).toBe(123);
  });

  it("should set timestamps on any interval histogram", () => {
    // given
    let currentTime = 42;
    let clock = () => currentTime;
    const recorder = new Recorder({}, clock);
    currentTime = 51;
    const firstHistogram = recorder.getIntervalHistogram();
    // when
    currentTime = 56;
    const secondHistogram = recorder.getIntervalHistogram();
    // then
    expect(secondHistogram.startTimeStampMsec).toBe(51);
    expect(secondHistogram.endTimeStampMsec).toBe(56);
  });

  it("should copy interval histogram", () => {
    // given
    let currentTime = 42;
    let clock = () => currentTime;
    const recorder = new Recorder({ numberOfSignificantValueDigits: 4 }, clock);
    recorder.recordValue(123);
    // when
    const histogram = new Int32Histogram(1, Number.MAX_SAFE_INTEGER, 3);
    currentTime = 51;
    recorder.getIntervalHistogramInto(histogram);
    // then
    expect(histogram.totalCount).toBe(1);
    expect(histogram.startTimeStampMsec).toBe(42);
    expect(histogram.endTimeStampMsec).toBe(51);
  });

  it("should reset values and timestamp", () => {
    // given
    let currentTime = 42;
    let clock = () => currentTime;
    const recorder = new Recorder({ numberOfSignificantValueDigits: 4 }, clock);
    recorder.recordValue(123);
    // when
    currentTime = 55;
    recorder.reset();
    const histogram = recorder.getIntervalHistogram();
    // then
    expect(histogram.totalCount).toBe(0);
    expect(histogram.startTimeStampMsec).toBe(55);
  });
});
