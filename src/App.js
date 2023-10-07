import Landing from './containers/landing';
import Navbar from './containers/navbar';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Landing />
    </ThemeProvider>
  );
}
export default App;
