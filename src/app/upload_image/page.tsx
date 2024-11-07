"use client"
import React from "react";
import { useState, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
// Define styled components for styling
const WebcamContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const WebcamVideo = styled.video`
  width: 100%;
  border-radius: 10px;
`;

const WebcamCanvas = styled.canvas`
  display: none; /* Hide canvas by default */
`;

const UploadImage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setMediaStream(stream);
    } catch (error) {
      console.error("Error accessing webcam", error);
    }
  };

  // Function to stop the webcam
  const stopWebcam = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => {
        track.stop();
      });
      setMediaStream(null);
    }
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      // Set canvas dimensions to match video stream
      if (context && video.videoWidth && video.videoHeight) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // Draw video frame onto canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Get image data URL from canvas
        const imageDataUrl = canvas.toDataURL("image/jpeg");

        // Set the captured image
        setCapturedImage(imageDataUrl);

        // Stop the webcam
        stopWebcam();

        // You can do something with the captured image here, like save it to state or send it to a server
      }
    }
  };

  // Function to reset state (clear media stream and refs)
  const resetState = () => {
    stopWebcam(); // Stop the webcam if it's active
    setCapturedImage(null); // Reset captured image
  };

  return (
    <WebcamContainer>
      {capturedImage ? (
        <>
        <div className="w-full h-full p-5">
            <h1>Analysis</h1>
            <div className="gallery flex">

                <Image src={capturedImage} width={50} height={50} alt="food" className="captured-image" />
            </div>
            <button
                onClick={resetState}
                className="bg-blue-300 rounded-xl p-3"
            >
                Take it
            </button>
        </div>
        </>
      ) : (
        <>
          <WebcamVideo ref={videoRef} autoPlay muted />
          <WebcamCanvas ref={canvasRef} />
          {!videoRef.current ? (
            <button
                onClick={resetState}
                className="bg-blue-300 rounded-xl p-3"
            >   
                Start Webcam
            </button>
          ) : (
            <button
                onClick={resetState}
                className="bg-blue-300 rounded-xl p-3"
            >
                Capture Image
            </button>
          )}
        </>
      )}
    </WebcamContainer>
  );
};



export default UploadImage;