function App() {
  return (
    <>
      <div className="main-container border-8">
        <div
          className="music-player border rounded-lg border-black p-5 text-white min-h-[700px] min-w-[500px] flex flex-col place-content-between bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://i1.sndcdn.com/artworks-s8HcrEyRQPjzKLah-PT8lOg-t500x500.jpg)`,
          }}
        >
          <div>
            <div className="top-nav">
              <h2>heart</h2>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="details">
              <h2 className="artist-name bold-3">louis</h2>
              <h1 className="title">Simple Music Player</h1>
            </div>
            <div className="progress-bar">progressbar</div>
            <div className="song-duration flex justify-between">
              <p className="start">00</p>
              <p className="finish">4:54</p>
            </div>
            <div className="controls flex justify-between max-w-xs m-auto">
              <i className="fa-solid fa-backward"></i>
              <i className="fa-solid fa-play"></i>
              <i className="fa-solid fa-forward"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
