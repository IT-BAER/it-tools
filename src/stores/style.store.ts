import { useMediaQuery, useStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { type Ref, computed, watch } from 'vue';
import { availableThemes } from '../themes';

export const useStyleStore = defineStore('style', {
  state: () => {
    // Persist theme name, default to 'dark'
    const themeName = useStorage('it-tools-theme', 'dark');

    // Legacy support: We can't easily use useDark() with multi-theme seamlessly, 
    // so we rely on our own state.
    const isSmallScreen = useMediaQuery('(max-width: 700px)');
    const isMenuCollapsed = useStorage('isMenuCollapsed', isSmallScreen.value) as Ref<boolean>;

    const currentTheme = computed(() => {
      return availableThemes.find(t => t.key === themeName.value) || availableThemes[1]; // fallback to dark
    });

    const isDarkTheme = computed(() => currentTheme.value.base === 'dark');

    function toggleDark() {
      // Simple toggle only switches between standard Light and Dark
      themeName.value = isDarkTheme.value ? 'light' : 'dark';
    }

    function setTheme(key: string) {
      if (availableThemes.find(t => t.key === key)) {
        themeName.value = key;
      }
    }

    watch(isSmallScreen, v => (isMenuCollapsed.value = v));

    return {
      themeName,
      currentTheme,
      isDarkTheme,
      toggleDark,
      setTheme,
      isMenuCollapsed,
      isSmallScreen,
    };
  },
});
