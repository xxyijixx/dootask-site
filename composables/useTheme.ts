export default function useTheme() {
    useHead({
        script: [
        {
            children: `(function() {
            var theme = localStorage.getItem('theme') || 'light';
            document.documentElement.setAttribute('data-theme', theme);
            })();`,
            type: 'text/javascript'
        }
        ]
    });
}