export type Palette = {
  accent_light: string;
  accent_dark: string;
  line_light: string;
  line_dark: string;
  text_primary: string;
  text_secondary: string;
  text_link: string;
  warning: string;
  error: string;
  background_primary: string;
  background_secondary: string;
  backgroundGradient: string;
  glass_effect_background: string;
  glass_effect_border: string;
};

export const darkTheme: Palette = {
  accent_light: '#A5F8D5',
  accent_dark: '#39eb7b',
  line_light: 'rgba(255, 255, 255,0.3)',
  line_dark: 'rgba(255, 255, 255,0.1)',
  text_primary: '#ffffff',
  text_secondary: '#000000',
  text_link: '#71CC93',
  warning: 'yellow',
  error: '#b94d4d',
  background_primary: 'rgba(39,40,44,1)',
  background_secondary: 'rgba(34, 72, 48,1)',
  backgroundGradient:
    'linear-gradient(90deg, rgba(34, 72, 48,1) 0%, rgba(39,40,44,1) 20%, rgba(39,40,44,1) 80%, rgba(34, 72, 48,1) 100%)',
  glass_effect_background: 'rgba(255, 255, 255, 0.1)',
  glass_effect_border: 'rgba(255, 255, 255, 0.6)',
};

export const lightTheme: Palette = {
  accent_light: '#BFA5F8',
  accent_dark: '#9073ce',
  line_light: 'rgba(255, 255, 255,0.6)',
  line_dark: 'rgba(255, 255, 255,0.3)',
  text_primary: '#ffffff',
  text_secondary: '#000000',
  text_link: '#9073ce',
  warning: 'yellow',
  error: '#b94d4d',
  background_primary: 'rgba(143,114,205,1)',
  background_secondary: 'rgba(238,174,198,1)',
  backgroundGradient:
    'linear-gradient(90deg, rgba(238,174,198,1) 0%, rgba(143,114,205,1) 20%, rgba(143,114,205,1) 80%, rgba(238,174,198,1) 100%)',
  glass_effect_background: 'rgba(255, 255, 255, 0.3)',
  glass_effect_border: 'rgba(255, 255, 255, 0.3)',
};
