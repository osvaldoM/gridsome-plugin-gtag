import VueGtag from "vue-gtag";
export default function(Vue, options, {isClient, router}) {
    if (!isClient) return

    Vue.use(VueGtag, {
        ...options
    }, router)

}
