import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardBox from "./CardBox";
import Shimmer from "./Shimmer";
import useRestaurantList from "../utils/useRestaurantList";


const Body = () => {



    //Custom Hook for this but didnt work
    const restaurantName = useRestaurantList();
    const [searchText, setSearchText] = useState("");

    const [allRestaurant, setAllRestaurant] = useState([]);
    const [filterDataRestaurant, setFilterDataRestaurant] = useState([]);

    console.log(restaurantName);
    useEffect(() => {
        //For Custom Hook
        // Initialize allRestaurant and filterDataRestaurant when restaurantName changes
        setAllRestaurant(restaurantName);
        setFilterDataRestaurant(restaurantName);
    }, [restaurantName]);

    // useEffect(() => {
    //     //can put the async function here as well

    //     getRestaurant();
    // }, []);
    // async function getRestaurant() {
    //     try {
    //         const fetchList = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6371746&lng=77.2756181&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //         const json = await fetchList.json();
    //         console.log(json);
    //         setAllRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //         setFilterDataRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


    //     } catch (err) {
    //         alert("Data is not Fetched")
    //     }
    // }



    function filterRestaurant(searchTextXYZ, restaurantXYZ) {
        return restaurantXYZ.filter((restaurantfil) => {
            return (restaurantfil?.info?.name?.toLowerCase()?.toUpperCase()?.includes(searchTextXYZ.toLowerCase().toUpperCase()))

        })
    }

    console.log("render");

    return (allRestaurant?.length === 0) ? <Shimmer /> : (
        //(filterDataRestaurant.length === 0) ? <h1>No Data is Available</h1> : 
        <div className="bg-red-50 pb-8 ">
            <div className="m-2 p-2   ">
                <input className="border border-solid border-black   " type="text" placeholder=" Restaurant Here " value={searchText}
                    //e is a part of javascript  
                    onChange={(e) => { setSearchText(e.target.value) }} />


                <button className="pl-4 pr-4 p-1 m-2 bg-red-600 text-white rounded-full " onClick={() => {
                    const data = filterRestaurant(searchText, allRestaurant);
                    setFilterDataRestaurant(data)
                }
                }>Search</button>

            </div >
            <div className=" grid grid-cols-4 grid-rows gap-y-6 justify-items-center         ">
                {/* Here "restaurant" should need to be used inside map because same is used in body as prop to pass 
                    See since cardbord is imported here so that means the data which is using to map there is present here so thats why name needs to be same */}
                {filterDataRestaurant.map((restaurant) => {

                    return (<Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}><CardBox restaurant={restaurant} /></Link>)
                })}
            </div >
        </div >)

}

export default Body;
























