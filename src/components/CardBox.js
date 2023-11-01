import React from "react";

import { IMG_CDN } from "../utils/config";



const CardBox = ({ restaurant }) => {



    //Can use these ways

    const { id, name, cloudinaryImageId, locality, costForTwo, cuisines, avgRating, areaName } = { ...restaurant.info };

    const { slaString, lastMileTravelString } = restaurant?.info?.sla;

    return (<div className="p-3 w-[300px] h-[350px] border-2  rounded-2xl bg-white  hover:bg-orange-100  shadow-lg ">

        <img className="w-60  h-36 rounded-md hover:w-72 hover:h-44 " src={IMG_CDN + cloudinaryImageId} alt="Images of Restaurant" />
        <h3 className="text-lg hover:text-xl font-bold "  >{name}</h3>
        <h4 className="text-base " >{locality} {areaName} ({lastMileTravelString})</h4>
        <h5 className="text-xs ">{costForTwo} </h5>
        <h5 className="text-xs whitespace-nowrap overflow-hidden text-ellipsis max-w-min    ">{cuisines.join(", ")}</h5>
        <h6 className="text-sm hover:text-base "> Delivery Time: {slaString}   </h6>
        <h5 className="text-xs "> {avgRating} ⭐ Stars</h5>
    </div>)

}
export default CardBox;