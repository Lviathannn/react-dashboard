import React from "react";

export default function Button({ bgColor, color, size, text, borderRadius }) {
   return (
      <div
         type="button"
         style={{
            backgroundColor: bgColor,
            color,
            borderRadius,
         }}
         className={`text-${size} hover:drop-shadow-lg p-3`}
      >
         {text}
      </div>
   );
}
