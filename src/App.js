import './App.css';
import { useState, useEffect } from 'react';
import Subreddit from './components/Subreddit';
import Post from './components/Post';
import Search from './components/Search';
import reddit from './reddit.svg';

const PopularSubredditsURL = "https://www.reddit.com/subreddits/popular.json";
const PostsBaseURL = "https://www.reddit.com";

function App() {
  const [subreddits, setSubreddits] = useState([]);
  const [posts, setPosts] = useState([]);
  const [filterResults, setFilterResults] = useState([]);

  function handleSubredditClick(subreddit) {
    getPosts(subreddit.data.url);
  }

  function handleSearch(search) {
    let result = posts.filter(post => {
      return post.data.title.includes(search);
    })

    setFilterResults(result);
  }
  
  async function getPosts(subreddit) {
    const response = await fetch(`${PostsBaseURL}${subreddit}.json`);
    const post = await response.json();

    setPosts(post.data.children);
    setFilterResults(post.data.children);
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
      <header className='flex header'>
        <div className='flex logo_name'>
          <img src={reddit}/>
          <p><span>Reddit</span>Minimal</p>
        </div>

        <Search onClick={handleSearch} />
      </header>

      <main>
        {filterResults.map((post, idx) => {
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
