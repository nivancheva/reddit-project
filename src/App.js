import './App.css';
import { useState, useEffect } from 'react';
import Subreddit from './components/Subreddit';
import Post from './components/Post';

const PopularSubredditsURL = "https://www.reddit.com/subreddits/popular.json";
const PostsBaseURL = "https://www.reddit.com";

function App() {
  const [subreddits, setSubreddits] = useState([]);
  const [posts, setPosts] = useState([]);

  function handleSubredditClick(subreddit) {
    getPosts(subreddit.data.url);
  }
  
  async function getPosts(subreddit) {
    const response = await fetch(`${PostsBaseURL}${subreddit}.json`);
    const post = await response.json();

    setPosts(post.data.children);
  }

  useEffect(() => {
    if (subreddits.length) {
      getPosts(subreddits[0].data.url);
    }
    else {
      setPosts([]);
    }
  }, [subreddits])

  useEffect(() => {
    async function getSubreddits() {
      const response = await fetch(PopularSubredditsURL);
      const reddits = await response.json();

      setSubreddits(reddits.data.children);
    }

    getSubreddits();
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
