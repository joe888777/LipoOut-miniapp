"use client"
import React, { useState } from "react";
import { ImageButton } from "@/components/button";
import edit from '../../assets/images/edit.png'
import Image from "next/image";
import fork from '../../assets/images/fork.png';
import { ToggleSwitch } from "flowbite-react";

type Props = {
    children?: React.ReactNode,
    className?: string
};

const Item: React.FC<Props> = ({children, className}) => {
    return (
        <div
            className={`border-gray-50 border-[1px] rounded-xl p-3 w-full ${className}`}
        >
            {children}
        </div>
    )
}
const Profile = () => {
    const [notification, setNotification] = useState(false);

    return (
        <div>
            <h1>Profile Settings</h1>
            <div className="flex mt-5">
                <Item>

                    <Image src={fork} width="50" height="50" alt="pic"/>
                    Kazen
                    <ImageButton
                        width={24}
                        height={24}
                        alt="edit"
                        image={edit}
                        />
                </Item>
            </div>
            <div className="flex mt-5 gap-2">
                <Item className="w-1/2">
                    <div className="text-center">
                        175 cm
                    </div>
                    <div className="text-center">
                        Height
                    </div>
                </Item>
                <Item className="w-1/2">
                    <div className="text-center">
                        85 kg
                    </div>
                    <div className="text-center">
                        Weight
                    </div>
                </Item>
            </div>
            <div className="flex mt-5 gap-2">
                <Item className="w-1/2">
                    <div className="text-center">
                        Lose Fat
                    </div>
                    <div className="text-center">
                        Goal
                    </div>
                </Item>
                <Item className="w-1/2">
                    <div className="text-center">
                        22
                    </div>
                    <div className="text-center">
                        Age
                    </div>
                </Item>
            </div>
            <h2
                className="mt-5"
            >
                Notifications
            </h2>
            <Item className="mt-5">
                <div className="text-center">
                    Record
                </div>
                <div className="text-center">
                    {`We'll notify you to take record`}
                </div>
                <ToggleSwitch
                    checked={notification}
                    onChange={() => {
                        setNotification((prev) => !prev);
                    }}
                />
            </Item>


        </div>
    )
}

export default Profile;