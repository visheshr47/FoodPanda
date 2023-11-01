import React from "react";


const Footer = () => (


    <div className="bg-red-700  ">
        <ul className="bg-orange-100  flex justify-evenly" >
            <li className="text-amber-900 mt-2">Contact Us
                <div >
                    <h4 className="text-gray-500">Food Panda</h4>
                    <h6 className="text-gray-500">© 2023 <br /> P.R. Enterprises</h6>
                </div>
            </li>
            <li className="text-amber-900 mt-2">We Deliver To:
                <ul className="text-gray-500">
                    <li>Pune</li>
                    <li>Delhi</li>
                    <li>Mumbai</li>
                    <li>Banglore</li>
                    <li>Kanpur</li>
                </ul>
            </li>
            <li className="text-amber-900 mt-2">Legal
                <h4 className="text-gray-500">Terms & Conditions</h4>
                <h4 className="text-gray-500">Cookie Policy</h4>
            </li>
            <li className="text-amber-900 mt-2">Follow Us
                <h4 className="text-gray-500">Instagram</h4>
                <h4 className="text-gray-500">Facebook</h4>
                <h4 className="text-gray-500">Thread</h4>
                <h4 className="text-gray-500">Google</h4>
            </li>

        </ul>
        <h4 className=" flex justify-evenly  text-white">@ 2023 Copyright by Vishesh Rajput</h4>
    </div>

)

export default Footer;