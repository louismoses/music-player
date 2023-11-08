import Content from "./Content";
import AudioFile from "./AudioFile";

const MusicPlayer = () => {
  return (
    <div
      className="flex flex-col gap-2 min-h-screen min-w-full border-8 place-content-center items-center mainContainer
    "
    >
      <Content
        title="Song Title"
        artist="Artist Name"
        artCover="https://i1.sndcdn.com/artworks-s8HcrEyRQPjzKLah-PT8lOg-t500x500.jpg"
      />

      <AudioFile />
    </div>
  );
};

export default MusicPlayer;
