"use client";

import { Navbar } from "flowbite-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Import images
import circleChart from '../assets/images/circle_chart.png';
import fitness from '../assets/images/fitness.png';
import fork from '../assets/images/fork.png';
import profile from '../assets/images/profile.png';
import add from '../assets/images/add.png';


function Navigator() {
    const router = useRouter();
    const navigatePage = (page: string) => {
        router.push(page);
    }

    return (
      <Navbar fluid rounded className="relative">
          <button
            onClick={() => navigatePage("/dashboard")}
            className="flex items-center justify-center"
          >
            <Image src={circleChart} alt="Dashboard" width={50} height={50} />
          </button>
          <button
            onClick={() => navigatePage("/workout")}
            className="flex items-center justify-center"
          >
            <Image src={fitness} alt="Profile" width={50} height={50} />
          </button>
          <button
            onClick={() => navigatePage("/upload_image")}
            className="flex items-center justify-center h-full"
          >
            <Image src={add} alt="Record" width={50} height={50} />
          </button>
          <button
            onClick={() => navigatePage("/upload_image")}
            className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-black hover:bg-black absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <Image src={add} alt="Register" width={30} height={30} />
          </button>
          <button
            onClick={() => navigatePage("/daily_nutritions")}
            className="flex items-center justify-center"
          >
            <Image src={fork} alt="Record" width={50} height={50} />
          </button>
          
          <button
            onClick={() => navigatePage("/profile")}
            className="flex items-center justify-center h-full"
          >
            <Image src={profile} alt="Register" width={50} height={50} />
          </button>
      </Navbar>
    );
}

export default Navigator;
