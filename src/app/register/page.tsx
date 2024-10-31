"use client"
import React, { useState } from "react";
import Image from "next/image";

import strong from '../../assets/images/strong.png';
import male from '../../assets/images/male.png';
import female from '../../assets/images/female.png';
import losefat from '../../assets/images/losefat.png';
import athletic from '../../assets/images/athletic.png';
import congrats from '../../assets/images/congrats.svg';
import burger from '../../assets/images/burger.png';

import '../../style/components.scss';
import WheelPicker from 'react-simple-wheel-picker';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Mako } from "next/font/google";
import Router from "next/router";
import { useRouter } from "next/navigation";

enum RegisterState {
    Intro = 1,
    Gender = 2,
    Height = 3,
    Weight = 4,
    Birthday = 5,
    Goal = 6,
    TargetWeight = 7,
    Congrats = 8,
    Teaching = 9
}

const Register = () => {
    const [state, setState] = useState(RegisterState.Intro);

    return (
        <div className="container px-5">
            {state === RegisterState.Intro && <IntruducePage setState={setState}/>}
            {state === RegisterState.Gender && <ChooseGender setState={setState}/>}
            {state === RegisterState.Height && <ChooseHeight setState={setState}/>}
            {state === RegisterState.Weight && <ChooseWeight setState={setState}/>}
            {state === RegisterState.Birthday && <ChooseBirthday setState={setState}/>}
            {state === RegisterState.Goal && <ChooseGoal setState={setState}/>}
            {state === RegisterState.TargetWeight && <ChooseTargetWeight setState={setState}/>}
            {state === RegisterState.Congrats && <Congrats setState={setState}/>}
            {state === RegisterState.Teaching && <Teaching setState={setState}/>}
        </div>
    )
}

const IntruducePage = (props: {setState: Function}) => {
    return (
        <div className="w-full flex-col flex items-center">
            <Image src={strong} width={233} height={300} alt="LipoOut"/>
            <h1 className="mt-10 text-center">
                What is Lipo-Out
            </h1>
            <p className="text-back">
                We help you to track meals and gain insights on calories to support your journey to an ideal physique!
            </p>
            <button
                className="bg-primary rounded-2xl w-full py-5 text-center text-white btn-main"
                onClick={() => {props.setState(RegisterState.Gender)}}
            >
                {`Let's Start`}
            </button>
        </div>
    )
}

const ChooseGender = (props: {setState: Function}) => {
    const [gender, setGender] = useState("male");


    return (
        <div>
            <h1 className="mt-10 text-center">
                Your Gender
            </h1>
            <p className="text-gray-500 mb-[60px] text-center mt-1">it will help us target your goal.</p>
            <div className="flex gap-2 justify-between mb-[98px]">
                <div
                    className={`w-2/5 cursor-pointer p-2 border rounded-lg transition-transform transform ${
                        gender === "male" ? 'border-blue-500 scale-105' : 'border-gray-300'
                    }`}
                    onClick={() => {
                        setGender("male");
                    }}
                >
                    <Image
                        src={male}
                        fill={false}
                        alt="male"
                    />
                </div>
                <div 
                    className={`w-2/5 cursor-pointer p-2 border rounded-lg transition-transform transform ${
                        gender === "female" ? 'border-blue-500 scale-105' : 'border-gray-300'
                    }`}
                    onClick={() => {
                        setGender("female");
                    }}
                >
                    <Image
                        src={female}
                        fill={false}
                        alt="female"
                    />
                </div>
            </div>
            <button
                className="bg-primary rounded-2xl w-full py-5 text-center text-white btn-main"
                onClick={() => {props.setState(RegisterState.Height)}}
            >
                {`Next`}
            </button>
        </div>
    )
}

const ChooseHeight = (props: {setState: Function}) => {
    const [selectedHeight, setSelectedHeight] = useState({ id: '170', value: 170 }); // Default height

    // Generate an array of heights from 1 to 500 with id and value
    const heights = Array.from({ length: 500 }, (_, i) => ({
        id: (i + 1).toString(),
        value: i + 1,
    }));
    const units = [{ id: 'cm', value: "cm" }];
    const handleOnChange = (target: any) => {
        setSelectedHeight(target);
    }
    return (
        <div>
            <h1 className="mt-10 text-center">
                Your Height
            </h1>
            <p className="text-gray-500 mb-[60px] text-center mt-1">it will help us target your goal.</p>
            <div className="flex justify-center mb-[124px]">
                <WheelPicker
                    data={heights}
                    onChange={handleOnChange}
                    height={174}
                    width={100}
                    titleText="Enter value same as aria-label"
                    itemHeight={30}
                    selectedID={selectedHeight.id}
                    color="#ccc"
                    activeColor="#333"
                    backgroundColor="#fff"
                    shadowColor="transparent"
                />
                <WheelPicker
                    data={units}
                    onChange={(target) => {}}
                    height={174}
                    width={100}
                    titleText="Enter value same as aria-label"
                    itemHeight={30}
                    selectedID={units[0].id}
                    color="#ccc"
                    activeColor="#333"
                    backgroundColor="#fff"
                    shadowColor="transparent"
                />
            </div>
            <button
                className="bg-primary rounded-2xl w-full py-5 text-center text-white btn-main"
                onClick={() => {props.setState(RegisterState.Weight)}}
            >
                {`Next`}
            </button>
        </div>
    )
}
const ChooseWeight = (props: {setState: Function}) => {
    const [selectedWeight, setSelectedWeight] = useState({ id: '50', value: 50 }); // Default weight
    const [selectedUnit, setSelectedUnit] = useState({ id: 'kg', value: "kg" }); // Default units

    // Generate an array of heights from 1 to 500 with id and value
    const weights = Array.from({ length: 500 }, (_, i) => ({
        id: (i + 1).toString(),
        value: i + 1,
    }));

    const units = [
        { id: 'kg', value: "kg" },
        {id: "lb", value: "lb"}
    ];

    const handleOnChange = (target: any) => {
        setSelectedWeight(target);
    }
    return (
        <div>
            <h1 className="mt-10 text-center">
                Your Weight
            </h1>
            <p className="text-gray-500 mb-[60px] text-center mt-1">it will help us target your goal.</p>
            <div className="flex justify-center mb-[124px]">
                <WheelPicker
                    data={weights}
                    onChange={handleOnChange}
                    height={174}
                    width={100}
                    titleText="Enter value same as aria-label"
                    itemHeight={30}
                    selectedID={selectedWeight.id}
                    color="#ccc"
                    activeColor="#333"
                    backgroundColor="#fff"
                    shadowColor="transparent"
                />
                <WheelPicker
                    data={units}
                    onChange={(target: any) => {setSelectedUnit(target)}}
                    height={174}
                    width={100}
                    titleText="Enter value same as aria-label"
                    itemHeight={30}
                    selectedID={selectedUnit.id}
                    color="#ccc"
                    activeColor="#333"
                    backgroundColor="#fff"
                    shadowColor="transparent"
                />
            </div>
            <button
                className="bg-primary rounded-2xl w-full py-5 text-center text-white btn-main"
                onClick={() => {props.setState(RegisterState.Birthday)}}
            >
                {`Next`}
            </button>
        </div>
    )
}
const ChooseBirthday = (props: { setState: Function }) => {
    const [selectedDay, setSelectedDay] = useState({ id: '1', value: 1 }); // Default day
    const [selectedMonth, setSelectedMonth] = useState({ id: '1', value: 1 }); // Default month
    const [selectedYear, setSelectedYear] = useState({ id: '2000', value: 2000 }); // Default year

    // Generate an array of days from 1 to 31
    const days = Array.from({ length: 31 }, (_, i) => ({
        id: (i + 1).toString(),
        value: i + 1,
    }));

    // Generate an array of months from 1 to 12
    const months = Array.from({ length: 12 }, (_, i) => ({
        id: (i + 1).toString(),
        value: i + 1,
    }));

    // Generate an array of years from 1900 to the current year
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => ({
        id: (currentYear - i).toString(),
        value: currentYear - i,
    }));

    const handleDayChange = (target: any) => {
        setSelectedDay(target);
    };

    const handleMonthChange = (target: any) => {
        setSelectedMonth(target);
    };

    const handleYearChange = (target: any) => {
        setSelectedYear(target);
    };

    return (
        <div>
            <h1 className="mt-10 text-center">Your Birthday</h1>
            <p className="text-gray-500 mb-[60px] text-center mt-1">it will help us target your goal.</p>
            <div className="flex justify-center mb-[124px]">
                <WheelPicker
                    data={years}
                    onChange={handleYearChange}
                    height={174}
                    width={100}
                    titleText="Select Year"
                    itemHeight={30}
                    selectedID={selectedYear.id}
                    color="#ccc"
                    activeColor="#333"
                    backgroundColor="#fff"
                    shadowColor="transparent"
                />
                <WheelPicker
                    data={months}
                    onChange={handleMonthChange}
                    height={174}
                    width={100}
                    titleText="Select Month"
                    itemHeight={30}
                    selectedID={selectedMonth.id}
                    color="#ccc"
                    activeColor="#333"
                    backgroundColor="#fff"
                    shadowColor="transparent"
                />
                <WheelPicker
                    data={days}
                    onChange={handleDayChange}
                    height={174}
                    width={100}
                    titleText="Select Day"
                    itemHeight={30}
                    selectedID={selectedDay.id}
                    color="#ccc"
                    activeColor="#333"
                    backgroundColor="#fff"
                    shadowColor="transparent"
                />
            </div>
            <button
                className="bg-primary rounded-2xl w-full py-5 text-center text-white btn-main"
                onClick={() => { props.setState(RegisterState.Goal) }} // Adjust the state transition as needed
            >
                {`Next`}
            </button>
        </div>
    );
};

const ChooseGoal = (props: {setState: Function}) => {
    const options = [
        {
          title: 'Lose Fat',
          description1: 'I need to lose more than 10 kilograms.',
          description2: 'My goal is to shed the fat and build muscle.',
          img: losefat,
        },
        {
          title: 'Lean and Fit',
          description1: 'I\'m slim but lack muscle definition.',
          description2: 'I want to build lean muscle properly.',
          img: male,
        },
        {
          title: 'Athletic',
          description1: 'My body fat is low, and I want to focus on gaining more muscle.',
          description2: '',
          img: athletic,
        },
      ];
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true, // Enable dragging
        swipe: true, // Enable swipe
        centerMode: true, // Enable center mode
        fade: false
      };
    
      return (
        <div>
            <h1 className="mt-10 text-center">What is your goal?</h1>
            <p className="text-gray-500 mb-[60px] text-center mt-1">Let we prepare the best program for you.</p>
            <Slider {...settings} className="mb-16">
                {options.map((option, index) => (
                    <div
                        key={index}
                        className="p-4 items-center bg- bg-primary rounded-2xl mx-2"
                    >
                        <div className="w-[117px] h-[130px] mx-auto">

                            <Image
                                src={option.img}
                                fill={false}
                                alt="male"
                            />
                        </div>
                        <h2 className="text-2xl font-bold mb-2 text-center text-black">{option.title}</h2>

                        <p className="text-center text-white text-sm">{option.description1}</p>
                        <p className="text-center text-white text-sm">{option.description2}</p>
                    </div>
                ))}
            </Slider>
            <button
                className="bg-primary rounded-2xl w-full py-5 text-center text-white btn-main"
                onClick={() => { props.setState(RegisterState.TargetWeight) }} // Adjust the state transition as needed
            >
                {`Next`}
            </button>
        </div>
    );
}
const ChooseTargetWeight = (props: {setState: Function}) => {
    const [targetWeight, setTargetWeight] = useState(50); // Default weight

  const handleSliderChange = (event: any) => {
    setTargetWeight(event.target.value);
  };

  return (
    <div className="">
        <h1 className="mt-10 text-center">Tour Target</h1>
        <p className="text-gray-500 mb-[60px] text-center mt-1">Your goal weight to reach in one month.</p>

        <div className="w-full max-w-md">
            <div className="flex w-full justify-center gap-1">
                <div className="px-10 flex items-center justify-center text-3xl font-bold text-[80px] text-black h-[140px] bg-gray-100 rounded-2xl">
                    {Math.floor(targetWeight/10)}
                </div>
                <div className="px-10 flex items-center justify-center text-3xl font-bold text-[80px] text-black h-[140px] bg-gray-100 rounded-2xl">
                    {targetWeight%10}
                </div>
            </div>
            <h2 className="text-xl">Recommended</h2>
            <p className="text-gray-500">30% of people have achieved this goal!</p>
            <input
                type="range"
                min="1"
                max="200" // Adjust the max value as needed
                value={targetWeight}
                onChange={handleSliderChange}
                className="w-full h-2 bg-transparent appearance-none cursor-pointer mb-[93px]"
                style={{
                    background: `linear-gradient(to right, 
                    red, 
                    orange, 
                    yellow, 
                    green, 
                    blue, 
                    indigo, 
                    violet)`,
                }}
            />
            <button
                className="bg-primary rounded-2xl w-full py-5 text-center text-white btn-main"
                onClick={() => { props.setState(RegisterState.Congrats) }} // Adjust the state transition as needed
            >
                {`Next`}
            </button>
        </div>
    </div>
  );
}
const Congrats = (props: {setState: Function}) => {
    return (
        <div className="w-full flex-col flex items-center">
            <Image src={congrats} width={250} height={217} className="mt-[143px]" alt="LipoOut"/>
            <h1 className="mt-10 text-center">
                Congrats
            </h1>
            <p className="text-gray-500 mb-[50px]">
                {`Now that everything is ready, let's start working towards your goals!`}
            </p>
            <button
                className="bg-primary rounded-2xl w-full py-5 text-center text-white btn-main"
                onClick={() => {props.setState(RegisterState.Teaching)}}
            >
                {`Let's goooo!!`}
            </button>
        </div>
    )
}
const Teaching = (props: {setState: Function}) => {
    const router = useRouter();
    const handleSave = () => {
        //save data
        router.push("/dashboard");
    }

    return (
        <div className="w-full">
            <div className="w-full flex justify-end mt-5">
                <Image width={240} height={180} alt="hamberger" src={burger}/>
            </div>
            <div className="text-black">
                {`Food Rating`}<br/>
                {`This dish contains`}<br/>
                {`🍜 Burger`}<br/>
                {`Total Calories: 🔥 500 Kcal`}<br/>
                {`Total Carb: 🍞 40 g`}<br/>
                {`Total Protein: 🍗 25 g`}<br/>
                {`Total Fat: 🥑 30 g`}<br/>
                {`Health rating: 🌟🌟🌟🌟 (4 Out of 10)`}
            </div>
            <h1 className="mt-10 text-center">
                Snap a Photo, 
                See the Calories!
            </h1>
            <p className="text-gray-500 text-sm mb-5">
                Easily track your daily food calories by sending a photo on Telegram—achieving your fitness goals has never been this simple.
            </p>
            <button
                className="bg-primary rounded-2xl w-full py-5 text-center text-white btn-main"
                onClick={handleSave} // Adjust the state transition as needed
            >
                {`Got it!`}
            </button>
        </div>
    );
}

export default Register;