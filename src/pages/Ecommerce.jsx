import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components";
import {
   earningData,
   ecomPieChartData,
   SparklineAreaData,
} from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

export default function Ecommerce() {
   return (
      <div className="mt-12">
         <div className="flex flex-wrap lg:flex-nowrap justify-center">
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center lg:bg-left-bottom">
               <div className="flex justify-between items-center">
                  <div>
                     <p className="font-bold text-gray-400">Earnings</p>
                     <p className="text-2xl">$63,448.78</p>
                  </div>
               </div>
               <div className="mt-6 w-28 text-center">
                  <Button
                     color="white"
                     bgColor="cyan"
                     text="Download"
                     borderRadius="10px"
                     size="md"
                  />
               </div>
            </div>
            <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
               {earningData.map((item) => (
                  <div
                     className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
                     key={item.title}
                  >
                     <button
                        type="button"
                        style={{
                           color: item.iconColor,
                           backgroundColor: item.iconBg,
                        }}
                        className="text-2xl opacity-90 rounded-full p-4 hover:drop-shadow-xl"
                     >
                        {item.icon}
                     </button>
                     <p className="mt-3">
                        <span className="text-lg font-semibold">
                           {item.amount}
                        </span>
                        <span className={`text-sm text-${item.pcColor} ml-2`}>
                           {item.percentage}
                        </span>
                     </p>
                     <p className="text-sm text-gray-400 mt-1">{item.title}</p>
                  </div>
               ))}
            </div>
         </div>

         <div className="flex gap-10 flex-wrap justify-center">
            <div className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 m-3 rounded-2xl p-4 md:w-780">
               <div className="flex justify-between ">
                  <p className="font-semibold text-2xl">Revenue Update</p>
                  <div className="flex items-center gap-4">
                     <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                        <span>
                           <GoPrimitiveDot />
                        </span>
                        <span>Expense</span>
                     </p>
                     <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                        <span>
                           <GoPrimitiveDot />
                        </span>
                        <span>Budget</span>
                     </p>
                  </div>
               </div>
               <div className="mt-10 flex gap-10 flex-wrap justify-center">
                  <div className="border-r-1 border-color m-4 pr-10">
                     <div className="">
                        <p>
                           <span className="text-3xl font-semibold">
                              $93,438
                           </span>
                           <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-xl bg-green-400 ml-3 text-xs text-white">
                              22%
                           </span>
                        </p>
                        <p className="text-gray-500 mt-1">Budget</p>
                     </div>
                     <div className="mt-8">
                        <p>
                           <span className="text-3xl font-semibold">
                              $43,438
                           </span>
                        </p>
                        <p className="text-gray-500 mt-1">Expense</p>
                     </div>

                     <div className="mt-5">
                        <SparkLine
                           currentColor="cyan"
                           id="line-sparkline"
                           type="Line"
                           height="80px"
                           width="250px"
                           data={SparklineAreaData}
                           color="cyan"
                        />
                     </div>
                     <div className="mt-10 w-40 text-center">
                        <Button
                           color="white"
                           bgColor="cyan"
                           text="Download Report"
                           borderRadius="10px"
                        />
                     </div>
                  </div>
                  <div className="">
                     <Stacked width="320px" height="360px" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
