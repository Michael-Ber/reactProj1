import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import nextId from 'react-id-generator'; 
import './app.scss';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn React', important: true, liked: false, id: nextId()},
                {label: 'That is good', important: false, liked: false, id: nextId()},
                {label: 'I need a break...', important: false, liked: false, id: nextId()}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
    }

    generateID() {
        let id = (Math.floor(Math.random() * 10000000000));
        return id;
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
            return {
                data: newArr
            }
        })
    }

    onToggleLike(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, liked: !old.liked};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
            return {
                data: newArr
            }
        })
    }
    

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex((item) => item.id === id); 
            const before = data.slice(0, index);
            const after = data.slice(index + 1); 
            const newArr = [...before, ...after];
            return {data: newArr}
        });
    }
    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: nextId()
        };
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {data: newArr}
        });
    }
    render() {
        const {data} = this.state;
        const postsNum = data.length;
        const liked = data.filter(item => item.liked).length;
        return (
            <div className="app">
                <AppHeader postsNum = {postsNum} postsLiked = {liked}/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts={this.state.data} 
                    onDelete={this.deleteItem}
                    onToggleImportant = {this.onToggleImportant}
                    onToggleLike = {this.onToggleLike}
                    />
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    }

}