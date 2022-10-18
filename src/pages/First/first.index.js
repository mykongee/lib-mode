import First from './First.vue';

export default {
    install: (app, options) => {
        app.component('First', First);
    }
}

export {First};
