export default defineNuxtPlugin((nuxtApp) => {
    const i18n = nuxtApp.$i18n as any
    const router = useRouter()

    // 在客户端检查并设置语言
    if (process.client) {
        const savedLocale = localStorage.getItem('language')
        if (savedLocale && ['zh', 'en'].includes(savedLocale)) {
            i18n.locale.value = savedLocale
        }

        // 路由重定向
        router.beforeEach((to, from, next) => {
            const locale = i18n.locale.value

            // 如果没有语言前缀，根据当前语言添加
            if (locale !== 'zh' && !to.path.startsWith(`/${locale}`)) {
                next(`/${locale}${to.path}`)
                return
            }

            next()
        })
    }
})