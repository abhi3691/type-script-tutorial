abstract class TakePhoto {
  constructor(public camerMode: string, public filter: string) {}
  abstract getSepia(): void;
}

class Instagram2 extends TakePhoto {
  constructor(public cameraMode: string, public filter: string) {
    super(cameraMode, filter);
  }
  getSepia(): void {
    throw new Error("Method not implemented.");
  }
}
