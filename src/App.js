import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import SinglePost from './components/Post/SinglePost'
import Post from './components/Post/Post'

function App() {
  return (
    <BrowserRouter>
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
