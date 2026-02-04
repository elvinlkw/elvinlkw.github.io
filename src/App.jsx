import { ThemeProvider } from 'styled-components';
import theme from './theme.jsx';
import store from './store.jsx';
import { Provider } from 'react-redux';

// containers
import Navbar from './containers/navbar/index.jsx';
import Landing from './containers/landing/index.jsx';
import Skills from './containers/skills/index.jsx';
import Experience from './containers/experience/index.jsx';
import Projects from './containers/projects/index.jsx';
import Footer from './containers/footer/index.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Navbar />
        <Landing />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </Provider>
    </ThemeProvider>
  );
}
export default App;
