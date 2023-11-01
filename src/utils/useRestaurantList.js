//NOT WORKING SOME ISSUE


import { useState, useEffect } from "react";

const useRestaurantList = () => {
    const [restaurantName, setRestaurantName] = useState([]);

    useEffect(() => {
        //can put the async function here as well

        getRestaurant();
    }, []);

    async function getRestaurant() {
        try {
            const fetchList = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6371746&lng=77.2756181&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await fetchList.json();
            setRestaurantName(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

            console.log(json)

        } catch (err) {
            alert("Data is not Fetched")
        }
    }
    return restaurantName;
}
export default useRestaurantList;