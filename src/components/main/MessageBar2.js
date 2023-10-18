import { useState, useEffect } from "react"
import Profile from "../Profile"

export default function MessageBar2(props) {
    return (
        <div >
            <div className="flex flex-col mt-[20px]">
                <div className="flex flex-row ml-[80px]">
                    <Profile width={20} height={20} />
                    <div className="text-[#33FF00]">
                        Kevin
                    </div>
                    <div className="text-[#DDD] ml-[5px]">
                        lol... thanks for the helpful information!
                    </div>
                </div>

            </div>
            <div className="flex flex-row px-5  ">
                <div className="mt-[10px]">
                    <Profile width={50} height={50} />
                </div>
                <div className="bg-color2 w-full p-[20px] mt-[10px] rounded-[10px]">
                    <div className="text-[#FFF]">
                        Archieved Thread
                    </div>
                    <div className="flex flex-row">
                        <div className="text-[#dd20f0]">
                            Fii
                        </div>
                        <div className="text-[#DDD] ml-5">
                            10:49 AM
                        </div>
                    </div>
                    <div className="text-[#FFF] ">
                        hahaha I totally forgot about taht, clearly Iwas messing withthe bots at some point
                    </div>
                    <div className="flex flex-row items-center">
                        <Profile width={20} height={20} selected={0} />
                        <div className="text-[#00DD33] ml-[10px]">
                            Alek
                        </div>
                        <div className="text-[#DDD] text-[12px] ml-[10px]">
                            Yesterday at 10:10 PM
                        </div>
                    </div>
                    <div className="text-[#FFF] ml-[60px]">
                        testing threads! holywood!!
                    </div>
                    <div className="flex flex-row items-center">
                        <Profile width={20} height={20} selected={0} />
                        <div className="text-[#DDD] ml-[10px]">
                            View 1 more reply
                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}