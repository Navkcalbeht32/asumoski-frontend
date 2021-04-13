import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import SinglePost from './components/Portfolio/SinglePost'
import 'aos/dist/aos.css'
import 'highlight.js/styles/ocean.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faLayerGroup, faUser } from '@fortawesome/free-solid-svg-icons'
import Navbar from './components/Navbar/Navbar'
import MobileNavbar from './components/Navbar/MobileNavbar'
import ScrollToTop from './components/Misc/ScrollToTop';

library.add(fab, faHome, faLayerGroup, faUser)



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <MobileNavbar />
      <Switch>
        <Route component={Home} exact path='/' />
        <Route component={SinglePost} path='/portfolio/:slug' />
        <Route component={Portfolio} path='/portfolio' />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
