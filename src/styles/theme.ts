import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  fontFamily: 'Roboto',
  colors:{
    background:	'#282a36',	
    currentLine:	'#44475a',	
    foreground:	'#f8f8f2',	
    comment:	'#6272a4',	
    cyan:	'#8be9fd',	
    green:	'#50fa7b',	
    orange:	'#ffb86c',	
    pink:	'#ff79c6',	
    lightPink:'#ff79c647',
    purple:	'#bd93f9',	
    lightPurple:	'#bd93f985',
    red:	'#ff5555',	
    yellow:	'#f1fa8c',
  }
}

export type ThemeType = typeof theme;

export default theme;

