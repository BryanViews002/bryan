import React from "react";
import "../styles/Gallery.css";

// Importing images dynamically
import niyi from "../assets/images/niyi.jpg";
import niyi2 from "../assets/images/niyi2.jpg";
import bryan from "../assets/images/bryan.jpg";

const Gallery = () => {
  const projects = [
    {
      id: 1,
      title: "Photo Editing Project 1",
      type: "image",
      media: niyi, // Updated to image path
      description: "A landscape photo I edited, enhancing colors and contrast.",
    },
    {
      id: 2,
      title: "Video Editing Project 1",
      type: "video",
      media: "path/to/video1.mp4", // Video file path
      description:
        "A short film I edited, adding transitions and color grading.",
    },
    {
      id: 3,
      title: "Photo Editing Project 2",
      type: "image",
      media: niyi2, // Another image path
      description: "Another landscape photo with enhanced details and effects.",
    },
    {
      id: 4,
      title: "Video Editing Project 2",
      type: "video",
      media: "path/to/video2.mp4", // Another video file
      description: "A video edited for a promotional campaign.",
    },
    // Add more projects as needed
  ];

  return (
    <div className="gallery">
      {projects.map((project) => (
        <div key={project.id} className="gallery-item">
          {project.type === "image" ? (
            <img src={project.media} alt={project.title} />
          ) : (
            <video controls>
              <source src={project.media} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
