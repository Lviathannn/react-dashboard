import React from "react";
import { Header, ChartsHeader, LineChart } from "../../components";

export default function Line() {
   return (
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
         <Header category="Chart" title="Infaltion Rate" />
         <div className="w-full">
            <LineChart />
         </div>
      </div>
   );
}
