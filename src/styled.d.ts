import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string,
    colors: {
      background: string
      currentLine: string
      foreground: string
      comment: string
      cyan: string
      green: string
      orange: string
      pink: string
      lightPink:string
      purple: string
      red: string
      yellow: string
    }
  }
}

