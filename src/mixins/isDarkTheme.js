export const isDarkTheme = {
    computed: {
        isDarkTheme() {
            return this.$store.getters.isDarkTheme;
        }
    }
}