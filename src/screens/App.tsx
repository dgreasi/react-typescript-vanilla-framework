import React from 'react';
import './App.scss';
import APIProvider from '../api/APIProvider';
import { PostList } from '../components/PostList';

function App() {
  return (
    <APIProvider>
      <div className="App">
        <PostList />
      </div>
    </APIProvider>
  );
}

export default App;
