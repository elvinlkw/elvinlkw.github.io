import { ThemeProvider } from 'styled-components';
import theme from './theme';
import store from './store';
import { Provider } from 'react-redux';

// containers
import Navbar from './containers/navbar';
import Landing from './containers/landing';
import Skills from './containers/skills';
import Experience from './containers/experience';
import Projects from './containers/projects';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Navbar />
        <Landing />
        <Skills />
        <Experience />
        <Projects />
      </Provider>
    </ThemeProvider>
  );
}
export default App;
