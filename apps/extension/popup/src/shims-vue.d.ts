declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    // eslint-disable-next-line
    const Hello: DefineComponent<{}, {}, any>;
    export default Hello;
}

declare module 'vue/dist/vue.esm-bundler' {
    export { createApp } from 'vue';
}

declare module '*.svg' {
    const value: string;
    export default value;
}

declare module '*.png' {
    const value: string;
    export default value;
}
