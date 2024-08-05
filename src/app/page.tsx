'use client';

import { useRef, useState } from 'react';
import { TonConnectUIProvider, TonConnectButton } from '@tonconnect/ui-react';
import { Video } from '@/components/youtube';
import { SwipeCard } from '@/components/swipeCard';
import Image from 'next/image';
import change_icon from '@/assets/turn.png';
import upload_icon from '@/assets/video_player.png';
import upload_cloud_icon from '@/assets/upload.svg';


import { Step } from '@/core/setting';

const Home = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedAnimation, setSelectedAnimation] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [step, setStep] = useState<Step>(Step.stepSelectVideo);
  const [animations, setAnimations] = useState<number[]>([1, 2, 3]);
  const [animationIndex, setAnimationIndex] = useState<number>(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);

      // Display the uploaded image preview
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleAnimationSelect = (animation: number) => {
    setSelectedAnimation(animation);
  };

  const handleNext = async () => {
    if (step === Step.stepSelectVideo) {
      handleAnimationSelect(animations[animationIndex]);
      setStep(Step.stepUploadPhoto);
    } else if (step === Step.stepUploadPhoto) {
      if (!selectedFile) {
        alert("Please upload an image");
        return;
      }
      await handleSubmit();
      setStep(Step.stepResult);
    } else if (step === Step.stepResult) {
      setStep(Step.stepShowOthers);
    }
  }
  const handleSubmit = async () => {
    if (!selectedFile) {
      alert("Please upload an image");
      return;
    }
    if (selectedAnimation === null) {
      alert("Please choose your video");
      return;
    }
    if (selectedFile && selectedAnimation !== null) {
      setLoading(true);
      setVideoUrl(null); // Reset video URL when a new submission is made

      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('number', selectedAnimation.toString());

      const response = await fetch('https://test-server-xmjw.onrender.com/uploadImage', {
        method: 'POST',
        body: formData,
      });

      setLoading(false);

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        setVideoUrl(url);
      }
    }
  };

  const handleIndexChange = () => {
    setAnimationIndex((prevIndex) => ((prevIndex + 1) % animations.length));
  }
  const handleAgain = () => {
    setSelectedFile(null);
    setSelectedAnimation(null);
    setVideoUrl(null);
    setPreviewUrl(null); // Reset preview URL
  };

  return (
    <TonConnectUIProvider
      manifestUrl="https://0bf2-114-35-55-85.ngrok-free.app/tonconnect-manifest.json"
    >
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
        <TonConnectButton className='hidden' />
        {loading && (
          <div className="flex items-center justify-center">
            <div className="loader"></div>
            <p>Loading...</p>
          </div>
        )}
        {!loading && !videoUrl && (
          <>
            {step ===  Step.stepSelectVideo &&(
              <>
                <h3 className="font-bold mb-8 text-[#8F8E8E]  text-center">
                  Let's be someone you like.
                </h3>
                <div className="mb-4">
                  <h2 className='text-white'>Today's video</h2>
                </div>
                <div className="flex mb-4">
                    <div className="flex flex-col items-center mx-4">
                      <img
                        src={`./${animations[animationIndex]}.gif`}
                        alt="ggg"
                        width="300"
                        height="300"
                        className={`border-4 border-transparent`}
                      />
                      <button
                        onClick={handleIndexChange}
                        className={`d-flex items-center px-4 py-2  rounded-full text-[#9B9B9B] bg-[#2D2D2D] mb-10`}
                      >
                        <Image
                          src={change_icon}
                          alt="turn"
                          className='inline-block w-5 h-5 mr-2'
                          width="30"
                          height="30"
                        />
                        change
                      </button>
                      <button
                        onClick={handleNext}
                        className="px-4 py-2 bg-[#58FFA3] text-black rounded-xl w-full mx-5"
                      >
                        Next
                      </button>
                    </div>
                </div>
              </>
            )}
            {step ===  Step.stepUploadPhoto &&(
              <>
                <h3 className="font-bold mb-8 text-[#8F8E8E]  text-center">
                  Let's be someone you like.
                </h3>
                <div className="mb-4">
                  <h2 className='text-center mb-4 text-white'>
                    Upload your photo
                  </h2>
                  <label htmlFor="file" className='w-full mx-5'>
                  { !selectedFile &&
                    <div className='relative'>

                      <Image
                        width="300"
                        height="300"
                        src={upload_icon}
                        className='mx-auto'
                        alt="upload"
                        />
                      <Image
                        width="50"
                        height="50"
                        src={upload_cloud_icon}
                        className='mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                        alt="upload"
                        />
                    </div>
                  }
                  </label>
                  <input
                    type="file"
                    id="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="mb-4 border p-2 rounded hidden w-[300px] h-[300px]"
                    />
                </div>
                {previewUrl && (
                  <label htmlFor="file" className='mb-4'>
                      <img src={previewUrl} alt="Uploaded" className="w-64 h-64 object-cover" />
                  </label>

                )}
                <button
                  onClick={handleNext}
                  className="px-4 py-2 bg-[#58FFA3] text-black rounded-xl w-full mx-5"
                >
                  Next
                </button>
              </>
            )}
          </>
        )}
        {videoUrl && step === Step.stepResult && (
          <div className="mt-4">
            <h3 className="font-bold mb-8 text-[#8F8E8E] text-center">
              Let's be someone you like.
            </h3>
            <div className="mb-4 px-5">
              <h2 className='text-center mb-4 text-white'>
                Here's your result
              </h2>
              <video controls className='mb-5 w-full'>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="flex items-center mb-10 justify-between px-5">
                <span className='text-white block'>If you are Top 3 scoring last week</span>
                <button className='border-[#FFE958] border-2 px-2 py-2 rounded-full text-[#FFE958] block mx-auto'>
                  Mint Special NFT
                </button>
              </div>
              <button className='border-[#58FFA3] border-2 px-2 py-2 rounded-full text-[#58FFA3] block mx-auto mb-10'>
                Mint today's NFT
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-[#58FFA3] text-black rounded-xl w-full mx-5"
              >
                See other's work
              </button>
            </div>
          </div>
        )}
        {step === Step.stepShowOthers && (
          <>
            <SwipeCard />
          </>
        )}
      </div>
    </TonConnectUIProvider>
  );
};


export default Home;
