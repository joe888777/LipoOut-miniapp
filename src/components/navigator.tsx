"use client";

import { Navbar } from "flowbite-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

// Import images
import circleChart from '../assets/images/circle_chart.svg';
import fitness from '../assets/images/fitness.png';
import fork from '../assets/images/fork.svg';
import profile from '../assets/images/profile.svg';
import add from '../assets/images/add.png';
import "../style/components.scss";

function Navigator() {
    const router = useRouter();
    
    const getRoute = () => {
      const group = location.href.split("/");
      return group[group.length -1];
    }
    const [activePage, setActivePage] = useState<string>(getRoute());

    const navigatePage = (page: string) => {
        setActivePage(page); // Set the active page
        router.push(page);
    };

    // Update active page based on the current route
    useEffect(() => {
        setActivePage(window.location.pathname);
    }, []);

  
    return (
      <Navbar fluid rounded className="fixed bottom-0 left-0 w-full rounded-t-xl px-6 flex justify-between" style={{
        "boxShadow": "0px -2px 60px 0px rgba(37, 39, 39, 0.20)"
        }}
      >
          <button
            onClick={() => navigatePage("/dashboard")}
            className={`flex items-center justify-center ${activePage === "dashboard" ? "text-blue-500" : "text-gray-500"}`} // Change color based on active page
          >
            <Image src={circleChart} alt="Dashboard" width={24} height={24} />
          </button>
          
          {/* <button
            onClick={() => navigatePage("/workout")}
            className="flex items-center justify-center"
          >
            <Image src={fitness} alt="Profile" width={50} height={50} />
          </button> */}
          {/* <button
            onClick={() => navigatePage("/upload_image")}
            className="flex items-center justify-center h-full"
          >
            <Image src={add} alt="Record" width={50} height={50} />
          </button> */}
          {/* <button
            onClick={() => navigatePage("/register")}
            className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-black hover:bg-black absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <Image src={add} alt="Register" width={30} height={30} />
          </button> */}
          <button
            onClick={() => navigatePage("/daily_nutritions")}
            className={`flex items-center justify-center ${activePage === "daily_nutritions" ? "text-blue-500" : "text-gray-500"}`} // Change color based on active page
          >
            <Image src={fork} alt="Record" width={24} height={24} />
          </button>
          
          <button
            onClick={() => navigatePage("/profile")}
            className={`flex items-center justify-center `} // Change color based on active page
          >
            <Image src={profile} alt="Register" width={24} height={24} className={`${activePage === "profile" ? "text-blue-500" : "text-gray-500"}`} />
          </button>
      </Navbar>
    );
}

export default Navigator;


