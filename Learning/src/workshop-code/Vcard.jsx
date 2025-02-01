import previewImg from './../assets/thumbnail.jpg';
import profileImg from './../assets/profile-img.jpeg';
import React from "react";

const VideoCard = () => {
  return (
    <>
      <Preview />
      <div>
        <Profile />
      </div>
      <div>
        <Title />
        <ChannelName />
      </div>
      <div>
        <Views/>
        <PublishedDate/>
      </div>
    </>
  );
};
const Preview = () => {
  return <img src={previewImg} alt="preview image" />;
};

const Title = () => {
  return <p>How to work to success </p>;
};

const Profile = () => {
  return <img src={profileImg} alt="profile img" />;
};

const ChannelName = () => {
  return (
    <div>
      <p> Channel Name </p>
    </div>
  );
};
const PublishedDate = () => {
  return (
          <p> 2025/02/01 </p>
  );
};
const Views = () => {
  return (
          <p> 5k views </p>
  );
};

export default VideoCard;