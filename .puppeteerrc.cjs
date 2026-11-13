// Puppeteer is only used locally for screenshots (with the already-installed Chrome),
// so skip its ~150MB browser download during installs (e.g. on Vercel builds).
module.exports = { skipDownload: true };
