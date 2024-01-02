/* eslint-disable react/no-unknown-property */
import { IoIosStar } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { PiSealWarningFill } from "react-icons/pi";
import { FaPersonRunning } from "react-icons/fa6";
import NewItems from "./NewItems/NewItems";
import Boxes from "./Boxes/Boxes";
import Combo from "./Combo/Combo";
import JuicyChicken from "./JuicyChicken/JuicyChicken";
import Snacks from "./NewItems/Snacks/Snacks";
import Drinks from "./Drinks/Drinks";
import Additional from "./Additional/Additional";
import Footer from "./Footer";


const Foods = () => {
    return (
        <div className="absolute top-24 left-[300px] z-10">
            <div className="relative">
                <div className="w-[660px] h-[300px] relative z-20 rounded-[25px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#070707]  opacity-55"></div>
                    <img className="w-full h-full object-cover" src="https://eda.yandex/images/3378693/049e8232c93c3ce2b19dc94a1da9ba26-1100x825.jpg" alt="" />
                    <div className="absolute bottom-28 left-8">
                        <h1 className="font-bold text-5xl text-[#EFE8E8]">KFC</h1>
                    </div>
                    <div className="absolute bottom-9 left-10">
                        <button className="text-black bg-white px-5 opacity-80 rounded-[17px] flex justify-center items-center gap-3">
                            <div>
                                < IoIosStar className="text-2xl" />
                            </div>
                            <div>
                                <span className="font-bold text-2xl">4.5</span> <br /> 200+
                            </div>
                        </button>
                    </div>
                    <div className="absolute bottom-9 left-[160px]">
                        <button className="text-black bg-white p-2 opacity-80 rounded-[17px] flex justify-center items-center gap-3">
                            <IoMdInformationCircleOutline className="text-4xl" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="p-4 mt-8 rounded-[17px] bg-white">
                <h1 className="flex items-center gap-3"><PiSealWarningFill className="text-3xl text-[#FA3E2C]" />
                    <div className="text-xl">Unfortunately, delivery is unavailable to this address</div>
                </h1>
            </div>
            <div className="p-4 mt-2 rounded-[17px] bg-[#DEF3D1]">
                <h1 className="flex items-center gap-3"><svg width="40" height="46" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7594 41.5647H16.0891C16.4937 41.5647 16.7567 41.6457 17.04 41.9492L20.1153 45.0042C22.7656 47.6546 25.2339 47.6343 27.8641 45.0042L30.9394 41.9492C31.2226 41.6457 31.5059 41.5647 31.8903 41.5647H36.2199C39.9426 41.5647 41.7028 39.8046 41.7028 36.0616V31.732C41.7028 31.3476 41.8242 31.0644 42.1074 30.7811L45.1624 27.7058C47.8128 25.0757 47.7926 22.6074 45.1624 19.9772L42.1074 16.8817C41.8242 16.5985 41.7028 16.3355 41.7028 15.9511V11.6214C41.7028 7.89874 39.9628 6.11833 36.2199 6.11833H31.8903C31.5059 6.11833 31.2226 6.01717 30.9394 5.73392L27.8641 2.67889C25.2339 0.028504 22.7656 0.028504 20.1153 2.67889L17.04 5.73392C16.777 6.01717 16.4937 6.11833 16.0891 6.11833H11.7594C8.03676 6.11833 6.27658 7.85828 6.27658 11.6214V15.9511C6.27658 16.3355 6.17542 16.5985 5.89217 16.8817L2.83715 19.9772C0.186757 22.6074 0.206989 25.0757 2.83715 27.7058L5.89217 30.7811C6.17542 31.0644 6.27658 31.3476 6.27658 31.732V36.0616C6.27658 39.7843 8.03676 41.5647 11.7594 41.5647Z" fill="currentColor"></path>
                </svg>
                <div className="absolute left-7 ">
                <FaPersonRunning className="text-white text-xl" />

                </div>
                    <div className="text-xl"><span className="font-semibold">Free delivery</span><br />off any order</div>
                </h1>
            </div>
            <NewItems></NewItems>
            <Boxes></Boxes>
            <Combo></Combo>
            <JuicyChicken></JuicyChicken>
            <Snacks></Snacks>
            <Drinks></Drinks>
            <Additional></Additional>
            
        </div>

    );
};

export default Foods;