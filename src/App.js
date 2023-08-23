import './App.css';

function App() {
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
        <article>
          <div className='card-wraper'>
            <div className='votes'>
              <button>up</button>
              <p>10.2k</p>
              <button>down</button>
            </div>

            <div className='card-container'>
              <h3>Card Text</h3>
              <img src='#'/>
              <div className='post-details'>
                <div>
                  <img src='#'/>
                  <span>Author name</span>
                </div>
                <p>11 hours ago</p>
                <div>
                  <button>Comments</button>
                  <span>736</span>
                </div>
              </div>

            </div>
          </div>
        </article>
      </main>

      <aside>
        <div>
          <h2>Subreddits</h2>
          <ul>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>BaldursGate3</button>
            </li>
            <li>
              <button>AskReddit</button>
            </li>
            <li>
              <button>mildlyinfuriating</button>
            </li>
            <li>
              <button>AmltheAsshole</button>
            </li>
            <li>
              <button>funny</button>
            </li>
            <li>
              <button>No StupidQuestions</button>
            </li>
            <li>
              <button>facepalm</button>
            </li>
            <li>
              <button>therewasnattempt</button>
            </li>
            <li>
              <button>Damnthatsinteresting</button>
            </li>
            <li>
              <button>pics</button>
            </li>
            
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default App;
