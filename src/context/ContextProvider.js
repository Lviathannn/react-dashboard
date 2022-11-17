import { click } from "@syncfusion/ej2-react-grids";
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
const initialState = {
   chat: false,
   cart: false,
   userProfile: false,
   notification: false,
};

export const ContextProvider = ({ children }) => {
   const [activeMenu, setActiveMenu] = useState(true);
   const [isClicked, setIsClicked] = useState(initialState);
   const [screenSize, setScreenSize] = useState(undefined);
   const [currentColor, setCurrentColor] = useState("#03C9D7");
   const [currentMode, setCurrentMode] = useState("Light");
   const [themeSetting, setThemeSetting] = useState(false);

   const setMode = (mode) => {
      setCurrentMode(mode.target.value);
      localStorage.setItem("themeMode", mode.target.value);
      setThemeSetting(false);
   };

   const setColor = (color) => {
      setCurrentColor(color);
      localStorage.setItem("colorMode", color);
      setThemeSetting(false);
   };

   const handleClick = (clicked) => {
      setIsClicked({ ...initialState, [clicked]: true });
   };

   const handleClose = () => {
      setIsClicked({ ...initialState });
   };

   return (
      <StateContext.Provider
         value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            currentColor,
            currentMode,
            themeSetting,
            setThemeSetting,
            setColor,
            setMode,
            handleClose,
         }}
      >
         {children}
      </StateContext.Provider>
   );
};

export const useStateContext = () => {
   return useContext(StateContext);
};
