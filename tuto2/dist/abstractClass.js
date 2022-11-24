"use strict";
class TakePhoto {
    constructor(camerMode, filter) {
        this.camerMode = camerMode;
        this.filter = filter;
    }
}
class Instagram2 extends TakePhoto {
    constructor(cameraMode, filter) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getSepia() {
        throw new Error("Method not implemented.");
    }
}
