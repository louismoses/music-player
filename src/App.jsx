function App() {
  return (
    <>
      <div className="main-container">
        <div
          className="music-player rounded-lg p-5 text-white min-h-[665px] w-[370px] flex flex-col place-content-between bg-cover bg-center bg-no-repeat overflow-auto"
          style={{
            backgroundImage: `url(https://i1.sndcdn.com/artworks-ka2tfvjtbk7W-0-t500x500.jpg)`,
          }}
        >
          <div>
            <div className="top-nav flex justify-end">
              <h2 className="text-2xl">💘</h2>
            </div>
          </div>
          <div className="flex flex-col gap-4 bottom-content px-3 py-4 rounded-lg ">
            <div className="details">
              <div className="artist-name bold-3  flex gap-2">
                <span className="inline-flex items-center border border-stone-500 text-stone-500 text-xs   px-2.5 py-0.5 rounded-full ">
                  Artist
                </span>
                <h2 className="text-md artist-name">Taylor Swift</h2>
              </div>

              <h1 className="title text-4xl overflow">Simple Music Player</h1>
            </div>
            <div className="progress-bar">
              <div className="w-full bg-gray-200 rounded-full h-2 ">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
            <div className="song-duration flex justify-between">
              <p className="start textShadow">00</p>
              <p className="finish textShadow">4:54</p>
            </div>
            <div className="controls flex justify-between max-w-xs m-auto gap-8 p-8">
              <i className="fa-solid fa-backward fa-xl cursor-pointer textShadow"></i>
              <i className="fa-solid fa-play fa-2xl cursor-pointer textShadow"></i>
              <i className="fa-solid fa-forward fa-xl cursor-pointer textShadow"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
