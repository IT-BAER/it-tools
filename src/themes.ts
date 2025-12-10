import type { GlobalThemeOverrides } from 'naive-ui';

export interface ThemeConfig {
  key: string;
  name: string;
  description: string;
  base: 'light' | 'dark';
  overrides: GlobalThemeOverrides;
  colors: {
    primary: string;
    background: string;
  };
}

// Helper to generate consistent overrides
const createTheme = (
  base: 'light' | 'dark',
  colors: {
    primary: string;
    primaryHover: string;
    primaryPressed: string;
    bg: string;
    sider: string;
    card: string;
    border: string;
    textBase?: string;
  }
): GlobalThemeOverrides => {
  const commonOverrides: any = {
    primaryColor: colors.primary,
    primaryColorHover: colors.primaryHover,
    primaryColorPressed: colors.primaryPressed,
    primaryColorSuppl: colors.primaryHover,
    cardColor: colors.sider,
    borderRadius: '20px',
    borderRadiusSmall: '10px',
    borderRadiusMedium: '20px',
    borderRadiusLarge: '24px',
  };

  if (colors.textBase) {
    commonOverrides.textColorBase = colors.textBase;
    commonOverrides.bodyColor = colors.bg;
  }

  return {
    common: commonOverrides,
    Layout: { color: colors.bg, siderColor: colors.sider, siderBorderColor: colors.border === 'transparent' ? 'transparent' : colors.border },
    Card: { color: colors.card, borderColor: colors.border },
    Table: { tdColor: colors.card, thColor: colors.sider },
    // Ensure accents pop everywhere
    Button: {
      colorPrimary: colors.primary,
      colorPrimaryHover: colors.primaryHover,
      colorPrimaryPressed: colors.primaryPressed,
      borderFocus: `1px solid ${colors.primary}`,
    },
    Input: {
      caretColor: colors.primary,
      borderHover: `1px solid ${colors.primaryHover}`,
      borderFocus: `1px solid ${colors.primary}`,
      boxShadowFocus: `0 0 0 2px ${colors.primary}33`,
    },
    Switch: {
      railColorActive: colors.primary,
      loadingColor: colors.primary,
    },
    Slider: {
      fillColor: colors.primary,
      fillColorHover: colors.primaryHover,
    },
    Spin: { color: colors.primary },
    LoadingBar: { colorLoading: colors.primary },
    Tabs: {
      tabTextColorActiveLine: colors.primary,
      barColor: colors.primary,
    },
    Menu: {
      itemHeight: '32px',
      itemTextColorActive: colors.primary,
      itemIconColorActive: colors.primary,
      itemTextColorChildActive: colors.primary,
      itemIconColorChildActive: colors.primary,
    },
    Notification: { color: colors.card },
    AutoComplete: { peers: { InternalSelectMenu: { height: '500px', color: colors.card } } },
  };
};

export const lightThemeOverrides = createTheme('light', {
  primary: '#18a058',
  primaryHover: '#36ad6a',
  primaryPressed: '#0c7a43',
  bg: '#f1f5f9',
  sider: '#ffffff', // Default sider is usually white in light
  card: '#ffffff',
  border: '#eee'
});

export const darkThemeOverrides = createTheme('dark', {
  primary: '#1ea54c',
  primaryHover: '#36ad6a',
  primaryPressed: '#0c7a43',
  bg: '#1c1c1c',
  sider: '#232323',
  card: '#232323',
  border: '#282828'
});

export const availableThemes: ThemeConfig[] = [
  {
    key: 'light',
    name: 'Light (Default)',
    description: 'Clean and bright default theme.',
    base: 'light',
    overrides: lightThemeOverrides,
    colors: { primary: '#18a058', background: '#f1f5f9' },
  },
  {
    key: 'dark',
    name: 'Dark (Default)',
    description: 'Easy on the eyes under low light.',
    base: 'dark',
    overrides: darkThemeOverrides,
    colors: { primary: '#1ea54c', background: '#1c1c1c' },
  },
  {
    key: 'ocean',
    name: 'Ocean Blue',
    description: 'Deep sea tones.',
    base: 'dark',
    overrides: createTheme('dark', {
      primary: '#0ea5e9',
      primaryHover: '#38bdf8',
      primaryPressed: '#0284c7',
      bg: '#0f172a',
      sider: '#1e293b',
      card: '#1e293b',
      border: '#334155'
    }),
    colors: { primary: '#0ea5e9', background: '#0f172a' },
  },
  {
    key: 'forest',
    name: 'Forest Green',
    description: 'Nature inspired light theme.',
    base: 'light',
    overrides: createTheme('light', {
      primary: '#166534',
      primaryHover: '#15803d',
      primaryPressed: '#14532d',
      bg: '#ecfdf5',
      sider: '#d1fae5',
      card: '#ffffff',
      border: '#a7f3d0'
    }),
    colors: { primary: '#166534', background: '#ecfdf5' },
  },
  {
    key: 'cyberpunk',
    name: 'Cyberpunk',
    description: 'High contrast neon.',
    base: 'dark',
    overrides: createTheme('dark', {
      primary: '#f472b6',
      primaryHover: '#f9a8d4',
      primaryPressed: '#db2777',
      bg: '#0a0a0a',
      sider: '#171717',
      card: '#171717',
      border: '#f472b6'
    }),
    colors: { primary: '#f472b6', background: '#0a0a0a' },
  },
  {
    key: 'dracula',
    name: 'Dracula',
    description: 'Classic vampire coding theme.',
    base: 'dark',
    overrides: createTheme('dark', {
      primary: '#bd93f9',
      primaryHover: '#d6bbfb',
      primaryPressed: '#9b6bdf',
      bg: '#282a36',
      sider: '#44475a',
      card: '#44475a',
      border: '#6272a4'
    }),
    colors: { primary: '#bd93f9', background: '#282a36' },
  },
  {
    key: 'nord',
    name: 'Nord',
    description: 'Arctic, cold, and clean.',
    base: 'dark',
    overrides: createTheme('dark', {
      primary: '#88C0D0',
      primaryHover: '#81A1C1',
      primaryPressed: '#5E81AC',
      bg: '#2E3440',
      sider: '#3B4252',
      card: '#3B4252',
      border: '#4C566A'
    }),
    colors: { primary: '#88C0D0', background: '#2E3440' },
  },
  {
    key: 'catppuccin',
    name: 'Catppuccin Macchiato',
    description: 'Soothing pastel theme.',
    base: 'dark',
    overrides: createTheme('dark', {
      primary: '#f5bde6',
      primaryHover: '#f0c6c6',
      primaryPressed: '#ee99a0',
      bg: '#24273a',
      sider: '#1e2030',
      card: '#363a4f',
      border: '#494d64'
    }),
    colors: { primary: '#f5bde6', background: '#24273a' },
  },
  {
    key: 'coffee',
    name: 'Morning Coffee',
    description: 'Warm earth tones.',
    base: 'dark',
    overrides: createTheme('dark', {
      primary: '#d4a373',
      primaryHover: '#faedcd',
      primaryPressed: '#bc6c25',
      bg: '#282624',
      sider: '#383532',
      card: '#383532',
      border: '#4a4641'
    }),
    colors: { primary: '#d4a373', background: '#282624' },
  },
  {
    key: 'synthwave',
    name: 'Synthwave 84',
    description: 'Retro futuristic grid.',
    base: 'dark',
    overrides: createTheme('dark', {
      primary: '#ff7edb',
      primaryHover: '#ff9ce6',
      primaryPressed: '#e64eb5',
      bg: '#2b213a',
      sider: '#241b31',
      card: '#241b31',
      border: '#3a2e4d',
      textBase: '#ffff00' // Slight yellow tint for that retro Feel or just keep white? Let's stick to defaults for readability unless explicit.
    }),
    colors: { primary: '#ff7edb', background: '#2b213a' },
  },
  {
    key: 'sunset',
    name: 'Sunset',
    description: 'Gradiente orange and reds.',
    base: 'dark',
    overrides: createTheme('dark', {
      primary: '#fb923c',
      primaryHover: '#fdba74',
      primaryPressed: '#ea580c',
      bg: '#431407',
      sider: '#571c0b',
      card: '#571c0b',
      border: '#7c2d12'
    }),
    colors: { primary: '#fb923c', background: '#431407' },
  },
  {
    key: 'midnight',
    name: 'Midnight Purple',
    description: 'Deepest dark purple.',
    base: 'dark',
    overrides: createTheme('dark', {
      primary: '#a855f7',
      primaryHover: '#c084fc',
      primaryPressed: '#7e22ce',
      bg: '#0f0a1e',
      sider: '#180e36',
      card: '#180e36',
      border: '#2e1866'
    }),
    colors: { primary: '#a855f7', background: '#0f0a1e' },
  }
];
