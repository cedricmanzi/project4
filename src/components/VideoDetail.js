import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    axios.get(`YOUR_API_ENDPOINT/${id}`)
      .then(response => setVideo(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!video) return <div>Loading...</div>;

  return (
    <div>
      <h1>{video.snippet.title}</h1>
      <iframe 
        title={video.snippet.title}
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <p>{video.snippet.description}</p>
    </div>
  );
}

export default VideoDetail;
