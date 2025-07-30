import { create } from "zustand";
import { Dark, Light } from "../styles/Themes"
export const useThemeStore = create((set, get)=> ({
    theme: "light",
    themeStyle: Light,
    setTheme: () => {
        const { theme } = get();
        const newTheme = theme === "light" ? "dark" : "light";
        set({
            theme: newTheme,
            themeStyle: newTheme === "light" ? Light : Dark
        });
    },
}));