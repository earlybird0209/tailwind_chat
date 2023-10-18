import { useState, useEffect } from "react"
import Profile from "../Profile"

export default function MessageBar(props) {
    return (
        <div className="flex flex-row p-2 md:p-5 items-start">
            <Profile width={50} height={50} />
            <div>
                <div className="flex flex-row">
                    <div className="text-[#fF20f0]">
                        Mondy Bot
                    </div>
                    <div className="text-[#DDD] ml-2 md:ml-5">
                        1/19/2022
                    </div>
                    <div className="bg-color4 ml-2 md:ml-5">
                        @GT
                    </div>
                </div>
                <div className="flex flex-row mt-4">
                    <div className="bg-color4 rounded-[5px] px-[5px] text-[#FFF]">
                        @Jared
                    </div>
                    <div className="text-[#FFF] ml-5">
                        tell truth
                    </div>
                </div>
                <div className="flex flex-row mt-4">
                    <div className="bg-color4  text-[#FFF] ">
                        @Jared
                    </div>
                    <div className="text-[#FFF] ml-2 md:ml-5">
                        has jointed the server! Welcome!
                    </div>
                </div>

            </div>
        </div>
    )
}