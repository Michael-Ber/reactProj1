import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.scss';


const App = () => {

    const data = [
        {label: 'Going to learn React', id:'qwerty'},
        {label: 'That is good', id:'qwert'},
        {label: 'I need a break...', id:'qwer'}
    ];
return (
    
    <div className="app">
        <AppHeader/>
        <div className="search-panel d-flex">
            <SearchPanel/>
            <PostStatusFilter/>
        </div>
        <PostList posts={data}/>
        <PostAddForm/>
    </div>
        
    
    )
}
export default App;