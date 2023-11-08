const Content = (props) => {
  return (
    <div className="container w-[400px] min-h-[400px] flex-col p-5 rounded-lg relative">
      <p className="z-10 text-white">{props.artist}</p>
      <h1 className="font-bold z-10 text-white ">{props.title}</h1>
      <img
        src={props.artCover}
        className="border-2 rounded-lg  absolute top-0 bottom-0 left-0 right-0 z-0 cover-art"
      />
    </div>
  );
};

export default Content;
