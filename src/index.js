import { First } from './pages/First/first.index.js';
// import First from './src/pages/First.vue';

export default {
    install: (app, options) => {
        app.component('First', First);
    }
}

export {First};
// export { default as First } from './pages/First/first.entry.js';

// import { Second } from './pages/Second/second.entry.js';
// import { Third } from './pages/Third/third.entry.js';

// export default {
//     First,
//     Second,
//     Third
// }