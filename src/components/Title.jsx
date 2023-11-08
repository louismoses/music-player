import React from "react";

const Title = (props) => {
  return (
    <div className="">
      <h1 className="font-bold  ">{props.title}</h1>
      <p className=" ">{props.artist}</p>
      <img
        src={props.artCover}
        height="40px"
        width="40px"
        className="border-2"
      />
    </div>
  );
};

export default Title;
