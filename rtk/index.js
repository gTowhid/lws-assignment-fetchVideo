require('util').inspect.defaultOptions.depth = null;

const store = require('./app/store');
const {
  fetchRootVideo,
  fetchTaggedVideos,
} = require('./features/videos/videosSlice');

async function dispatches() {
  await store.dispatch(fetchRootVideo());
  store.dispatch(fetchTaggedVideos());
}

dispatches();
