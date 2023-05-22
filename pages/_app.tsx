import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/react"

const App = ({ children }) => (
  <ThemeProvider>
    <ColorModeProvider>{children}</ColorModeProvider>
  </ThemeProvider>
)

export default App

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// export default MyApp
