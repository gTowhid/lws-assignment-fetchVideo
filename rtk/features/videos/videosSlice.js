const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
const fetch = require('node-fetch');

// initial state
const initialState = {
  loading: false,
  mainVideo: {},
  taggedVideo: [],
  error: '',
  tags: [],
};

// create async thunk
const fetchRootVideo = createAsyncThunk('videos/fetchRootVideo', async () => {
  const rootResponse = await fetch('http://localhost:9000/videos');
  const rootVideo = await rootResponse.json();

  return rootVideo;
});

const fetchTaggedVideos = createAsyncThunk(
  'videos/fetchTaggedVideos',
  async (_, thunkAPI) => {
    const taggedVideoLink = thunkAPI.getState().videos.tags.join('&tags_like=');

    const taggedResponse = await fetch(
      'http://localhost:9000/videos?tags_like=' + taggedVideoLink
    );
    const taggedVideos = await taggedResponse.json();

    taggedVideos.sort(function (a, b) {
      return (
        parseFloat(b.views.slice(0, -1)) - parseFloat(a.views.slice(0, -1))
      );
    });

    return taggedVideos;
  },
  {
    condition: (userId, { getState, extra }) => {
      const tags = getState().videos.tags;
      return tags[0] ? true : false;
    },
  }
);

const videosSlice = createSlice({
  name: 'videos',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRootVideo.pending, (state, action) => {
      (state.loading = true), (state.error = '');
    });
    builder.addCase(fetchRootVideo.fulfilled, (state, action) => {
      (state.loading = false),
        (state.error = ''),
        (state.mainVideo = action.payload),
        (state.tags = action.payload.tags);
    });
    builder.addCase(fetchRootVideo.rejected, (state, action) => {
      (state.loading = false),
        (state.error = action.error.message),
        (state.mainVideo = {}),
        (state.taggedVideo = []);
    });
    builder.addCase(fetchTaggedVideos.pending, (state, action) => {
      (state.loading = true), (state.error = '');
    });
    builder.addCase(fetchTaggedVideos.fulfilled, (state, action) => {
      (state.loading = false),
        (state.error = ''),
        (state.taggedVideo = action.payload);
    });
    builder.addCase(fetchTaggedVideos.rejected, (state, action) => {
      (state.loading = false),
        (state.error = action.error.message),
        (state.taggedVideo = []);
    });
  },
});

module.exports = videosSlice.reducer;
module.exports.fetchRootVideo = fetchRootVideo;
module.exports.fetchTaggedVideos = fetchTaggedVideos;
