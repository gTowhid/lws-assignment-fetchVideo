const createSlice = require('@reduxjs/toolkit');

// initial state
const initialState = {
  mainVideo: {},
  taggedVideo: [],
};

const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    fetchRootVideo: (state, action) => {
      state.mainVideo = {
        id: 7,
        title: 'Tailwind CSS Tutorial Bangla - Introduction to Tailwind CSS',
        description:
          'Tailwind is a utility-first CSS framework to rapidly build modern websites without ever leaving your HTML. In this Tailwind CSS tutorial, I have given a short introduction and overview of Tailwind CSS in Bangla language. Also, I have explained, why Tailwind vs Bootstrap debate should be stopped as both are useful in their own ways.',
        author: 'Learn with Sumit',
        avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
        date: 'Oct 15, 2021',
        duration: '10:12',
        views: '7.4k',
        link: 'https://www.youtube-nocookie.com/embed/smDa6hoxLKI',
        thumbnail: 'https://i3.ytimg.com/vi/smDa6hoxLKI/maxresdefault.jpg',
        tags: ['tailwind', 'css', 'ui'],
        likes: 0,
        unlikes: 0,
      };
    },
    fetchTaggedVideo: (state, action) => {
      taggedVideo: [
        {
          id: 1,
          title: 'যে ১০ টি ভুল বিগিনার রিয়্যাক্ট ডেভেলপাররা করে থাকেন',
          description:
            'আপনারা যারা বিগিনার হিসেবে রিয়্যাক্ট জেস নিয়ে কাজ করা শুরু করেছেন, তারা রিয়্যাক্ট এর বেশ কিছু কনসেপ্ট ঠিক মতো আয়ত্ত না করতে পারার কারণে বিচিত্র কিছু সমস্যার সম্মুখীন হন এবং শেষ পর্যন্ত বুঝতে না পেরে হতাশ হয়ে পড়েন। তাদের জন্যই এই ভিডিওটি। এই ভিডিওতে আমি এমন ১০টি সমস্যার কথা তুলে ধরেছি যেগুলো বিগিনার হিসেবে আপনারা অহরহ সম্মুখীন হবেন। আশা করি ভিডিওটি দেখলে আপনাদের এই সমস্যাগুলো নিয়ে আর কনফিউশন থাকবেনা।',
          author: 'Learn with Sumit',
          avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
          date: 'May 10, 2022',
          duration: '10:12',
          views: '3.1k',
          link: 'https://www.youtube-nocookie.com/embed/6O4s7v28nlw',
          thumbnail: 'https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg',
          tags: ['javascript', 'react', 'tips'],
          likes: 0,
          unlikes: 0,
        },
        {
          id: 4,
          title:
            'Debounce Function in JavaScript - JavaScript Job Interview question',
          description:
            'In this video, I have explained about the debounce function in JavaScript. This is a common question interviewers ask at Job Interviews. If you watch this video carefully, you will understand what is debounce and how to handle it with custom debounce function.',
          author: 'Learn with Sumit',
          avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
          date: 'Jan 06, 2022',
          duration: '10:12',
          views: '5.3k',
          link: 'https://www.youtube-nocookie.com/embed/dD9O8DnIBj4',
          thumbnail: 'https://i3.ytimg.com/vi/dD9O8DnIBj4/maxresdefault.jpg',
          tags: ['debounce', 'javascript', 'tips'],
          likes: 0,
          unlikes: 0,
        },
        {
          id: 6,
          title:
            'React Router DOM v6 Bangla Tutorial - Breaking Changes - React Router 6 vs 5',
          description:
            'In this React Router DOM v6 Bangla tutorial, you will learn how to install react router dom 6, what are the breaking changes in react router 6, difference between react router 6 vs 5, how to upgrade from react router v5 to react router v6. ',
          author: 'Learn with Sumit',
          avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
          date: 'Nov 08, 2021',
          duration: '10:12',
          views: '9.4k',
          link: 'https://www.youtube-nocookie.com/embed/34tjWL9wi4g',
          thumbnail: 'https://i3.ytimg.com/vi/34tjWL9wi4g/maxresdefault.jpg',
          tags: ['react', 'router', 'javascript'],
          likes: 0,
          unlikes: 0,
        },
      ];
    },
  },
});

module.exports = videosSlice.reducer;
module.exports.videosActions = videosSlice.actions;
