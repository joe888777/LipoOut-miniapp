"use client"
import React, { useState } from "react";
import { ImageButton } from "@/components/button";
import edit from '../../assets/images/edit.png'
import Image from "next/image";
import fork from '../../assets/images/fork.svg';
import { ToggleSwitch } from "flowbite-react";
import NavigatorLayout from "@/components/navigator_layout";
import { useRouter } from "next/navigation";

type Props = {
    children?: React.ReactNode,
    className?: string
};

const Item: React.FC<Props> = ({children, className}) => {
    return (
        <div
            className={`border-gray-100 border-[1px] rounded-2xl text-gray-700 p-3 w-full ${className}`}
        >
            {children}
        </div>
    )
}

const Profile = () => {
    const [notification, setNotification] = useState(false);
    const router = useRouter();

    return (
        <NavigatorLayout>
            <h1>Profile Settings</h1>
            <div className="flex mt-5">
                <Item className="flex items-center relative">

                    <Image className="rounded-full" src={fork} width="48" height="48" alt="pic"/>
                    <div className="ml-5 ">
                        <span className="text-xl">
                            Kazen
                        </span>
                        <p className="text-gray-500 text-sm">
                            @Kazz9921
                        </p>
                    </div>
                    <ImageButton
                        width={16}
                        height={16}
                        className="rounded-full p-2 self-end absolute right-4 bottom-1/2 translate-y-1/2"
                        alt="edit"
                        image={edit}
                        onClick={() => {router.push("/register")}}
                    />
                </Item>
            </div>
            <div className="flex mt-5 gap-2">
                <Item className="w-1/2">
                    <div className="text-center text-gray-700">
                        175 cm
                    </div>
                    <div className="text-center text-gray-500 text-sm">
                        Height
                    </div>
                </Item>
                <Item className="w-1/2">
                    <div className="text-center text-gray-700">
                        85 kg
                    </div>
                    <div className="text-center text-gray-500 text-sm">
                        Weight
                    </div>
                </Item>
            </div>
            <div className="flex mt-5 gap-2">
                <Item className="w-1/2">
                    <div className="text-center text-gray-700">
                        Lose Fat
                    </div>
                    <div className="text-center text-gray-500 text-sm">
                        Goal
                    </div>
                </Item>
                <Item className="w-1/2">
                    <div className="text-center text-gray-700 text-base">
                        22
                    </div>
                    <div className="text-center text-gray-500 text-sm">
                        Age
                    </div>
                </Item>
            </div>
            {/* <h2
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
            </Item> */}
        </NavigatorLayout>
    )
}

export default Profile;