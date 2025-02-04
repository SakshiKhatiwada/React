import React from "react";
import thumbnail from "../assets/thumbnail-img.jpeg";
import profile from "../assets/profile-img.jpeg";

const VideoCard = () => {
  return (
    <div className="shadow-md m-6 w-fit rounded-xl">
      <Preview />
      <div className="p-2 flex justify-start gap-2">
        <Profile />
        <div className="flex flex-col content-between justify-end">
          <Title />
          <ChannelName />
          <div className="flex gap-2 text-xs">
            <Views />
            <UploadTime />
          </div>
        </div>
      </div>
    </div>
  );
};

//Layered Breakdown
const Preview = () => {
  return (
    <div className="relative">
    <img src={thumbnail} alt="preview img" className="max-w-mx rounded-xl" />
    <div className="absolute bottom-px right-px bg-gray-500 text-white rounded-md px-1">1:20:25</div>
    </div>
  );
};

const Profile = () => {
  return (
    <img src={profile} alt="profile pic" className="w-8 h-8 rounded-full" />
  );
};

const Title = () => {
  return (
    <p className="relative flex content-evenly font-bold after:content-['⋮'] after:absolute after:-right-10">
      <div> You need to see this video </div>
    </p>
  );
};

const ChannelName = () => {
  return <p className="text-xs">Coffee with Sakshi</p>;
};

const Views = () => {
  return <p>10k views</p>;
};

const UploadTime = () => {
  return <p>10 days ago</p>;
};

export default VideoCard;
