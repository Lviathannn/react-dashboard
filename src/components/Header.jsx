import React from "react";

export default function Header({ category, title }) {
   return (
      <div className="mb-10">
         <p className="text-gray-400">{category}</p>
         <p className="text-3xl font-extrabold tracking-tight text-slate-700">
            {title}
         </p>
      </div>
   );
}
