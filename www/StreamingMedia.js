"use strict";
function StreamingMedia() {
}

StreamingMedia.prototype.playAudio = function (url, options) {
	options = options || {};
	cordova.exec(options.successCallback || null, options.errorCallback || null, "StreamingMedia", "playAudio", [url, options]);
};

StreamingMedia.prototype.pauseAudio = function (options) {
    options = options || {};
    cordova.exec(options.successCallback || null, options.errorCallback || null, "StreamingMedia", "pauseAudio", [options]);
};

StreamingMedia.prototype.resumeAudio = function (options) {
    options = options || {};
    cordova.exec(options.successCallback || null, options.errorCallback || null, "StreamingMedia", "resumeAudio", [options]);
};

StreamingMedia.prototype.stopAudio = function (options) {
    options = options || {};
    cordova.exec(options.successCallback || null, options.errorCallback || null, "StreamingMedia", "stopAudio", [options]);
};

StreamingMedia.prototype.playVideo = function (url, options) {
	options = options || {};
	cordova.exec(options.successCallback || null, options.errorCallback || null, "StreamingMedia", "playVideo", [url, options]);
};

StreamingMedia.prototype.pauseVideo = function (options) {
    options = options || {};
    cordova.exec(options.successCallback || null, options.errorCallback || null, "StreamingMedia", "pauseVideo", [options]);
};

StreamingMedia.prototype.resumeVideo = function (options) {
    options = options || {};
    cordova.exec(options.successCallback || null, options.errorCallback || null, "StreamingMedia", "resumeVideo", [options]);
};


StreamingMedia.install = function () {
	if (!window.plugins) {
		window.plugins = {};
	}
	window.plugins.streamingMedia = new StreamingMedia();
	return window.plugins.streamingMedia;
};

cordova.addConstructor(StreamingMedia.install);