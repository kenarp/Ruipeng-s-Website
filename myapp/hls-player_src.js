import Hls from "hls.js";

const video = document.getElementById("video");
// const videoSrc = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
const videoSrc = "http://www.ruipeng.xyz/videos/index.m3u8";
//
// First check for native browser HLS support
//
if (video.canPlayType("application/vnd.apple.mpegurl")) {
  video.src = videoSrc;
  //
  // If no native HLS support, check if HLS.js is supported
  //
} else if (Hls.isSupported()) {
  const hls = new Hls();
  hls.loadSource(videoSrc);
  hls.attachMedia(video);
}
