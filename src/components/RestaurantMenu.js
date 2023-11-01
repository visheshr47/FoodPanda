import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../utils/config";
import Shimmer from "./Shimmer";
import Switch from "./Switch";
import useRestaurantItem from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    // const param = useParams();
    // const { id } = param;
    const { id } = useParams();
    const menuItem = useRestaurantItem(id);



    //const [vegToggle, setVegToggle] = useState(true);
    const [showVegOnly, setShowVegOnly] = useState(true);

    // const [menuItem, setMenuItem] = useState(null);

    // useEffect(() => {
    //     getMenu()
    // }, [])

    // async function getMenu() {

    //     const dataMenu = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6371746&lng=77.2756181&restaurantId=" + id);
    //     const jsonMenu = await dataMenu.json();


    //     setMenuItem(jsonMenu.data);
    // }


    if (menuItem === null) return <Shimmer />;

    const { name, cloudinaryImageId } = menuItem?.cards[0]?.card?.card?.info;

    //If Any error came then might be need to update itemCard

    const { itemCards } = menuItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
    // const { itemCards } = menuItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;


    console.log(menuItem);

    const { cuisines, locality } = menuItem?.cards[0]?.card?.card?.info;
    const { lastMileTravelString } = menuItem?.cards[0]?.card?.card?.info?.sla;

    //const filteredVeg = itemCards.filter((item) => item.card?.info?.isVeg === 1);

    const filteredItems = showVegOnly
        ? itemCards
        : itemCards.filter((item) => item.card?.info?.isVeg === 1);

    // return menuItem === null ? (<Shimmer />) : (
    return (
        <>

            <div className="flex flex-wrap justify-evenly mt-10   ">
                <div className=" ">
                    <ul>
                        <li className="text-2xl  font-bold">{name} </li>
                        <li className="text-sm   font-serif text-gray-500     ">{cuisines.join(", ")}</li>
                        <li className="text-base    font-light  text-gray-500     ">{locality}, {lastMileTravelString} </li>
                    </ul>
                </div>
                <img className="w-24  h-24 " src={IMG_CDN + cloudinaryImageId} />
            </div>
            <hr />




            {/* <div className="flex justify-center">
                <Switch />
            </div> */}

            <div className="flex justify-center">
                <Switch veg={showVegOnly} onToggle={() => setShowVegOnly(!showVegOnly)} />
            </div>

            <hr />




            <div className="min-h-[50vh]      ">
                <ul className="grid grid-cols-2 grid-rows gap-y-6 justify-items-center text-sm hover:text-base pb-6   " >
                    {filteredItems.map((dish) => (<li className=" hover:text-lg " key={dish?.card?.info?.id}>{dish?.card?.info?.name}</li>))}
                </ul>
            </div >



            {/* <div>
                {veg === false ? (
                    <ul>
                        <li>{itemCards.map((dish) => (<li key={dish?.card?.info?.id}>{dish?.card?.info?.name}</li>))}</li>
                    </ul>
                ) : (
                    <ul>
                        <li>{filteredVeg.map((dish) => (<li key={dish?.card?.info?.id}>{dish?.card?.info?.name}</li>))}</li>
                    </ul>
                )}
            </div> */}



            {/* <div>
                <ul>
                    <li>{itemCards.map((dish) => (<li key={dish?.card?.info?.id}>{dish?.card?.info?.name}</li>))}</li>
                </ul>
            </div > */}

        </>
    )
}
export default RestaurantMenu;