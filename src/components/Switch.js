import React from "react";

// const Switch = (veg) => {
//     const [isSelected, setIsSelected] = useState(veg);
//     return (
//         <div className={`flex w-10 h-5 m-10 border border-solid border-black  rounded-full ${isSelected ? 'bg-green-600' : 'bg-white-600'}`}
//             onClick={() => setIsSelected(!isSelected)}
//         >
//             <span className={`h-5 w-5 bg-white rounded-full border border-solid border-black transition-all duration-200  ${isSelected ? 'ml-5' : 'ml-0'} `} />
//         </div>

//     )

// }



{/* <div className={`relative w-10 h-5 m-10 rounded-full bg-white border border-solid border-black ${veg ? 'bg-green-600' : 'bg-white'}`} onClick={onToggle}> */ }

const Switch = ({ veg, onToggle }) => {

    return (
        // <div className="relative w-10 h-5 m-10 rounded-full bg-white border border-solid border-black" onClick={onToggle}>
        <div className={` w-10 h-5 m-10 rounded-full shadow-sm    border-solid border-black ${veg ? 'bg-slate-400 ' : 'bg-green-600'}`} onClick={onToggle}>
            <span
                className={`block w-5 h-5 rounded-full bg-white border border-solid border-black transform transition-transform duration-200 ${veg ? 'translate-x-0' : 'translate-x-full'}`}
            />
        </div>

    )

}
export default Switch;