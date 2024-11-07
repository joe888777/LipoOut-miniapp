"use client";
import React, { useState } from "react";
import NavigatorLayout from "@/components/navigator_layout";
import DatePickerButton from "@/components/daytimepicker";
import arrow_right from "@/assets/images/arrow_right.svg";
import Image from "next/image";
import useDateStore from "@/state/useDateStore";
import { addDays, format } from "date-fns";

import fire from "@/assets/images/fire.svg";
import meat from "@/assets/images/meat.svg";
import fat from "@/assets/images/fat.png";
import carb from "@/assets/images/carb.png";

import NutritionAnalysis from "@/components/nutrition/nutrition_analysis";

const ProgressBar = (props: {percentage: number}) => {
    return (
      <div className="relative w-full max-w-md bg-gray-100 rounded-xl h-[10px]">
        <div
          className="h-[10px] rounded-xl"
          style={{
            width: `${Math.min(props.percentage, 100)}%`,
            background: "var(--Linear-100, linear-gradient(274deg, #4B6DAA 0%, #86B0D4 124.45%))"
          }}
        />
      </div>
  );
};

enum page {
    pageMain,
    pageNutrition
}

const DailyNutritions = () => {
    const [pageState, setPageState] = useState(page.pageMain);
  return (
    <NavigatorLayout className="">
    {pageState === page.pageMain && ( <MainPage setPageState={setPageState}/>)}
    {pageState === page.pageNutrition && ( <NutritionAnalysis setPageState={setPageState}/>)}
     
    </NavigatorLayout>
  );
};

const MainPage = (props: {setPageState: any}) => {
    const { selectedDate, setSelectedDate } = useDateStore();
  const activities = [
    { name: "Burger", calories: 732, time: "07:00am" },
    { name: "Salad", calories: 332, time: "11:00am" },
  ];

  const totalNutritions = [
    { type: "calories", value: { current: 1320, goal: 2400 }, unit: "Kcal", icon: fire },
    { type: "proteins", value: { current: 240, goal: 200 }, unit: "g", icon: meat },
    { type: "fats", value: { current: 100, goal: 120 }, unit: "g", icon: fat },
    { type: "carb", value: { current: 80, goal: 120 }, unit: "g", icon: carb },
  ]

  const get5Dates = () => {
    const dates = [];
    // Add 2 days before and 2 days after the selected date
    for (let i = -2; i <= 2; i++) {
      const newDate = addDays(selectedDate, i);
      dates.push(newDate);
    }
    return dates;
  };
    return (
        <div>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-700 block">
            Daily Nutritions
          </h1>
          <DatePickerButton />
        </div>
        <div className="flex justify-between mb-4">
          {get5Dates().map((date) => {
            return (
              <button
                key={date.getTime()} // Use getTime() for unique key
                className={`text-gray-500 px-4 py-5 rounded-2xl ${
                  selectedDate?.getTime() === date.getTime() ? "bg-primary text-white" : ""
                }`}
                style={{
                  background: selectedDate?.getTime() === date.getTime() ? "var(--Linear-100, linear-gradient(274deg, #4B6DAA 0%, #86B0D4 124.45%))" : "#F6F6F6"
                }}
                onClick={() => setSelectedDate(date)} // Set selected date on click
              >
                <div>
                  {format(date, 'EEE')} {/* Format date for display */}
                </div>
                <div>
                {format(date, 'd')}
                </div>
              </button>
            );
          })}
        </div>
        <div className="flex justify-between mb-4">
          <span>Aug</span>
          <button className="text-gray-500">📅</button>
        </div>
        <h2 className="font-semibold mb-2 text-[#1d1617] text-base">Activities</h2>
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex justify-between items-center border py-3 px-4 border-gray-100 mt-3"
            onClick={() => {props.setPageState(page.pageNutrition)}}
          >
            <div className="flex items-center">
              <img
                src={`https://via.placeholder.com/50?text=${activity.name}`} // Placeholder image
                alt={activity.name}
                className="w-[60px] h-[60px] rounded-full mr-2"
              />
              <div>
                <p className="font-bold text-gray-800">{activity.name}</p>
                <p className="text-[#B6B4C2]">
                  {activity.calories} Kcal / {activity.time}
                </p>
              </div>
            </div>
            <button className="text-blue-500">
              <Image src={arrow_right} width={24} height={24} alt="food" />
            </button>
          </div>
        ))}

        <h2 className="font-semibold mt-5 mb-2 text-[#1d1617] text-base">Total Nutritions</h2>
          {totalNutritions.map((totalNutrition: any, index: number) => {
            return (
              <div key={index}>
                <p className="flex">
                  {totalNutrition.type}
                  <Image src={totalNutrition.icon} width={16} height={16} alt="fire" className="ml-1" />
                </p>
                <p>
                    {totalNutrition.value.current}g / {totalNutrition.value.goal}g
                </p>
                <ProgressBar percentage={(totalNutrition.value.current / totalNutrition.value.goal) * 100}/>
                <p>
                  {totalNutrition.value.current} Kcal /{" "}
                  {totalNutrition.value.goal} Kcal
                </p>
              </div>
            )
          })}
      </div>
    )
}

export default DailyNutritions;