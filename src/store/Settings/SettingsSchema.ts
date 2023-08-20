export enum appThemes {
    LIGHT = "light-theme",
    DARK = "dark-theme",
    BOOK = "book-theme"
}
export interface SettingsSchema {
    theme: appThemes
}