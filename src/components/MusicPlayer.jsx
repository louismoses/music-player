import Title from "./Title";
import AudioFile from "./AudioFile";

const MusicPlayer = () => {
  return (
    <container className="flex min-h-[100vh]">
      <Title title="THis is Music" artist="Lorem ipsum" artCover="" />
      <AudioFile />
    </container>
  );
};

export default MusicPlayer;
