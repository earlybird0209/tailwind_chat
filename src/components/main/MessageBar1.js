import { useState, useEffect } from "react"
import Profile from "../Profile"

export default function MessageBar1(props) {
    return (
        <div >
            <div className="w-full flex flex-row  p-[20px] mt-[20px]  bg-color2 ">
                <div className="mt-[40px]">
                    <Profile width={50} height={50} />
                </div>
                <div className="">
                    <div className="flex flex-row">
                        <Profile width={20} height={20} selected={0} />
                        <div className="text-[#aaa]">
                            if I hahahd, I totally forgot about that ....... I mess
                        </div>
                    </div>
                    <div className="flex flex-row mt-[10px]">
                        <div className="text-[#dd20f0]">
                            Fii
                        </div>
                        <div className="text-[#DDD] ml-5">
                            10:49 AM
                        </div>
                    </div>
                    <div className="flex flex-row mt-4">
                        <div className="bg-color4 rounded-[5px] px-[4px] text-[#00aa11] ">
                            @Alex
                        </div>
                        <div className="bg-color4 rounded-[5px] px-[4px] text-[#00aa11] ml-3">
                            @Kevin
                        </div>
                        <div className="bg-color4 rounded-[5px] px-[4px] text-[#00aa11] ml-3">
                            @Javed
                        </div>
                        <div className="bg-color4 rounded-[5px] px-[4px] text-[#00aa11] ml-3">
                            @Jpeced
                        </div> <div className=" text-[#FFF] ml-3">
                            @howdybot
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex flex-row ml-[110px] mt-[5px]">
                <div className=" text-[#FFF] ">
                    Sorry for the pings
                </div>
                <div className=" text-[#FFF] ">
                    meant to do that silently
                </div>
            </div>
        </div>
    )
}