import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
import Get from './pages/Get/Get';
//import Footer from './components/Footer/Footer';
import { cache, CacheProvider, Flex, FlexItem, fonts, Global, reset, ThemeProvider, themes } from '@qiwi/pijma-desktop';
import AppHeader from './components/Header/Header';
import Footer from './components/Footer/Footer';


export default function App() {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={themes.orange}>
        <Global styles={[reset, fonts]} />
        <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto' }}>
          <Flex maxWidth={1000} p={5} direction='column' justify='center' align='center'>
            <FlexItem width={1} p={5}>
              <AppHeader />
            </FlexItem>
            <FlexItem width={1} p={5} >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="service" element={<Services />} />
                <Route path="get" element={<Get />} />
              </Routes>
            </FlexItem>
            <FlexItem width={1} p={5} >
              <Footer />
            </FlexItem>
          </Flex>
        </div>
      </ThemeProvider>
    </CacheProvider>


  );
}


