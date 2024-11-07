// src/components/NutritionAnalysis.tsx
import React from 'react';
import Image from 'next/image';
import burger from '@/assets/images/burger.png';
import { ImageButton } from '../button';
import arrow_lft from '@/assets/images/arrow_left.svg';
import trash_can from '@/assets/images/trash_can.svg';
import meat from '@/assets/images/meat.svg';
import fire from '@/assets/images/fire.svg';
import fat from '@/assets/images/fat.png';
import carb from '@/assets/images/carb.png';
import { page } from '@/core/page';


interface Props {
  setPageState: Function
}

const NutritionAnalysis: React.FC<Props> = (props: Props) => {
  return (
    <div className="bg-white">
      <div className="flex mt-5 w-full justify-between">
        <ImageButton
          width={8}
          height={16}
          image={arrow_lft}
          className='px-3 py-2 rounded-lg'
          alt="last_page"
          onClick={() => { props.setPageState(page.pageMain) }}
        />
        <h1 className='text-gray-700'>Analysis</h1>
        <button className='p-2 rounded-xl'>
          <Image
            width={16}
            height={16}
            src={trash_can}
            alt="last_page"
            className='bg-gray-100 border border-[#F6F6F6] rounded-lg'
            onClick={() => { props.setPageState(page.pageMain) }}
          />
        </button>
      </div>
      <div className="flex items-center mb-4 rounded-[20px] mt-5"
        style={{
          boxShadow: "0px 10px 40px 0px rgba(29, 22, 23, 0.07)"
        }}
      >
        <Image
          src={burger}// Replace with your image URL
          alt="food"
          className="w-[60px] h-[60px] rounded-2xl mr-4"
          width={60}
          height={60}
        />
        <div className=''>
          <h2 className="text-xl font-bold text-gray-700">Burger</h2>
          <p className="text-gray-500">❤️ 4.6</p>
        </div>
      </div>

      <div className="mb-4 rounded-[20px] px-5 py-3  mt-5"
        style={{
          boxShadow: "0px 10px 40px 0px rgba(29, 22, 23, 0.07)"
        }}
      >
        <h3 className="font-semibold text-gray-700 mb-2">Nutritions</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center rounded-xl border-[0.5px] border-[#E4EDF5] relative overflow-hidden">
            <p className="font-bold text-gray-600">Protein</p>
            <p>40g</p>
            <Image
              src={meat}// Replace with your image URL
              alt="food"
              className="rounded-2xl absolute right-[-2px] bottom-0 opacity-[0.4]"
              width={24}
              height={24}
            />
          </div>
          <div className="text-center rounded-xl border-[0.5px] border-[#E4EDF5]  relative overflow-hidden">
            <p className="font-bold text-gray-600">Fat</p>
            <p>25g</p>
            <Image
              src={fat}// Replace with your image URL
              alt="food"
              className="rounded-2xl absolute right-[-1px] bottom-0 opacity-[0.4]"
              width={24}
              height={24}
            />
          </div>
          <div className="text-center rounded-xl border-[0.5px] border-[#E4EDF5]  relative overflow-hidden">
            <p className="font-bold text-gray-600">Carb</p>
            <p>90g</p>
            <Image
              src={carb}// Replace with your image URL
              alt="food"
              className="rounded-2xl absolute right-[-4px] bottom-0 opacity-[0.4]"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className="text-center rounded-xl mt-4 border-[0.5px] border-[#E4EDF5] relative overflow-hidden">
          <p className="font-bold  text-gray-600">Calories</p>
          <p>732 Kcal</p>
          <Image
              src={fire}// Replace with your image URL
              alt="food"
              className="rounded-2xl absolute right-[-12px] bottom-[-6px] opacity-[0.4]"
              width={48}
              height={48}
            />
        </div>
      </div>

      <div
        className="mb-4  mt-5 rounded-[20px] px-5 py-3"
        style={{
          boxShadow: "0px 10px 40px 0px rgba(29, 22, 23, 0.07)"
        }}
      >
        <h3 className="font-semibold mb-3 text-gray-700">Details</h3>
        <p>
          This burger contains higher fat and calories, making it suitable for occasional indulgence. However, it is recommended to pair it with more vegetables to increase fiber and nutrient intake.
        </p>
      </div>

      <button className="w-full text-white py-2 rounded-2xl"
        style={{
          background: "var(--Linear-100, linear-gradient(274deg, #4B6DAA 0%, #86B0D4 124.45%))",
          boxShadow: "0px 10px 22px 0px rgba(134, 176, 212, 0.30)"
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default NutritionAnalysis;