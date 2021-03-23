import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import SinglePost from './components/Post/SinglePost'
import Post from './components/Post/Post'
import 'aos/dist/aos.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faLayerGroup, faUser } from '@fortawesome/free-solid-svg-icons'
import Navbar from './components/Navbar/Navbar'
import MobileNavbar from './components/Navbar/MobileNavbar'

library.add(fab, faHome, faLayerGroup, faUser)



function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <MobileNavbar />
      <Switch>
        <Route component={Home} exact path='/' />
        <Route component={Portfolio} path='/portfolio' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
