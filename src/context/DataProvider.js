// import React, { useState } from 'react'
// import { createContext } from 'react'
// const Datacontext = createContext();

// const Dataprovider = () =>{
//   const[html , sethtml] = useState('');
//   const[css , setcss] = useState('');
//   const[js , setjs] = useState('');


//   return (
//     <Datacontext.Provider
//       value={{
//         html,
//         sethtml,
//         css,
//         setcss,
//         js,
//         setjs
//       }}
//     ></Datacontext.Provider>
//   )
// }


// export default Dataprovider;










import { createContext, useState } from 'react';


export const DataContext = createContext();

const DataProvider = ({ children }) => {
    
    const [html, setHtml] = useState('');
    const [js, setJs] = useState('');
    const [css, setCss] = useState('');

    return (
        <DataContext.Provider value={{
            html,
            setHtml,
            css,
            setCss,
            js,
            setJs
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;