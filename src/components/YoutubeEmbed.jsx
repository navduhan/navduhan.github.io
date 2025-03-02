'use client';
import React from 'react';

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-full max-w-3xl relative aspect-[16/9]" > 
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          src={`https://www.youtube.com/embed/${videoId}`} // Starts at 17s
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeEmbed;