// import { createContext } from "react";
// import React, { useState } from "react";

// export type CursorLookType =
//   | "slider-hover"
//   | "slider-drag"
//   | "text"
//   | "link"
//   | "hamburger"
//   | "default";
// export type CustomCursorType = {
//   type: CursorLookType;
//   setType: (type: CursorLookType) => void;
// };

// const CustomCursorContext = createContext<CustomCursorType>({
//   type: "default",
//   setType: () => {},
// });

// const CustomCursorManager = ({ children }) => {
//     const [type, setType] = useState<CursorLookType>("default");
  
//     return (
//       <CustomCursorContext.Provider value={{ type, setType }}>
//         {children}
//       </CustomCursorContext.Provider>
//     );
//   };

//   export default CustomCursorManager;