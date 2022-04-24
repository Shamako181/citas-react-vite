import { useState, useEffect } from "react";

const Error = ({children}) => {
    return(
        <div className="bg-red-500 text-white textcenter p-3 uppercase font-bold mb-3 rounded-sm">
            {children}
        </div> 
    )
}

export default Error;