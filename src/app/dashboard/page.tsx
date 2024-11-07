"use client"

import React, { useState } from "react";
import waterblur from '../../assets/images/waterblur.png';
import Image from "next/image";
import NavigatorLayout from "@/components/navigator_layout";

const ProgressBar = (props: {percentage: number}) => {
    return (
        <div className="relative w-full max-w-md bg-gray-100 rounded-xl h-10">
          <div
            className="h-10 rounded-xl"
            style={{ width: `${props.percentage}%`, background: "var(--Linear-100, linear-gradient(274deg, #4B6DAA 0%, #86B0D4 124.45%))" }}
          />
          <div
            className="h-10 absolute inset-0 flex items-center justify-center text-white font-bold"
            style={{ width: `${props.percentage}%` }}
          >
            1730/1730 Kcal
          </div>
        </div>
    );
  };


const DashBoard = () => {
    const [percentage, setPercentage] = useState(100); // Default percentage

    const handleInputChange = (event: any) => {
        const value = Math.max(0, Math.min(100, event.target.value)); // Ensure value is between 0 and 100
        setPercentage(value);
    };
    return (
        <NavigatorLayout className="p-5 bg-gray-100">
            <p className="text-gray-500 text-sm">stay Healthy</p>
            <h1>Hello joe 4Chen</h1>
            <div
                className={`bg-white rounded-xl p-5 w-full`}
            >
              <p className="text-black text-xs my-3">Today’s Calories</p>
                <ProgressBar percentage={percentage}/>
            </div>
            <div className="flex mt-4 justify-between">
              <div className="bg-white rounded-xl p-5 w-full mr-5 flex pl-5 pr-2">
                <Image width={20} height={151} alt="water" src={waterblur} className="mr-[10px]"/>
                <h2 className="text-black text-xs">
                  Water<br/>(Coming soon)
                </h2>
              </div>
              <div className="">
                <div className="bg-white rounded-xl p-5 w-full mb-[15px]">
                  <h2>Sleep<br/>(Coming soon)</h2>
                </div>
                <div className="bg-white rounded-xl p-5 w-full">
                  <h2>Calories<br/>(Coming soon)</h2>
                </div>
              </div>
            </div>
        </NavigatorLayout>
    )
}

export default DashBoard;