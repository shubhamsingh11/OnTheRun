import React from 'react';

import Header from './components/header/header.component.jsx';
import HomePage from "./pages/homepage/homepage.component";
import Post from "./pages/Posts/post.component.jsx";

import './styles.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
            <Header/>
            <HomePage/>
            <Post/>
            </div>
            
        )
    }
}
export default App;
