import './App.css';
import { useState, useEffect } from 'react';
import Subreddit from './components/Subreddit';
import Post from './components/Post';

const initialSubreddits = ["one", "two", "two", "two"];
const initialPosts = [{
  votes: '10.2k',
  title: 'Card text',
  author: 'Bobby',
  lastEdit: '11 hours ago',
  comments: 735
}, {
  votes: '10.2k',
  title: 'Card text',
  author: 'Neli',
  lastEdit: '11 hours ago',
  comments: 735
}];

function App() {
  const [subreddits, setSubreddits] = useState([]);
  const [posts, setPosts] = useState([]);

  function handleSubredditClick(subreddit) {
    // Call api to fetch posts for subreddit

    setPosts(initialPosts.filter(c => c.author == "Neli"));
  }

  useEffect(() => {
    // call API instead
    let result = initialPosts;

    setPosts(result);
  }, [])

  useEffect(() => {
    // call API instead
    let result = initialSubreddits;

    setSubreddits(result);
  }, [])

  return (
    <div className='root'>
      <header className='flex'>
        <div className='flex'>
        <div>Logo</div>
        <p><span>Reddit</span>Minimal</p>
        </div>

        <form>
          <input type='text' placeholder='Search' />
          <button>Search</button>
        </form>
      </header>

      <main>
        {posts.map((post, idx) => {
          return (
            <Post key={idx} post={post} />
          )
        })}
      </main>

      <aside>
        <div>
          <h2>Subreddits</h2>
          <ul>
            {subreddits.map((subreddit, idx) => {
              return (
                <Subreddit key={idx} subreddit={subreddit} onClick={handleSubredditClick}/>
              )
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default App;
