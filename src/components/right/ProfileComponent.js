import { useState, useEffect } from "react"
import Profile from "../Profile"
export default function ProfileComponent(props) {
    return (
        <div className="p-5 bg-color2 w-full rounded-lg">
            <div className="text-[#FFF]">
                2 Address
            </div>
            <div className="flex flex-row  items-center mt-[10px]">
                <Profile width={50} height={50} selected={1} />
                <div className="flex flex-col">
                    <div className="text-[#00dd25]">
                        Alek
                    </div>
                    <div>
                        Teleod aleoe
                    </div>
                </div>
            </div>

            <div className="flex flex-row  items-center mt-[10px]">
                <Profile width={50} height={50} selected={2} />
                <div className="flex flex-col">
                    <div className="text-[#00dd25]">
                        Alek
                    </div>
                    <div>
                        Teleod aleoe
                    </div>
                </div>
            </div>
            <div className="text-[#FFF] mt-[20px]">
                1 Address
            </div>
            <div className="flex flex-row  items-center mt-[10px]">
                <Profile width={50} height={50} selected={1} />
                <div className="flex flex-col">
                    <div className="text-[#00dd25]">
                        Alek
                    </div>
                    <div>
                        Teleod aleoe
                    </div>
                </div>
            </div>

            <div className="text-[#FFF] mt-[20px]">
                2 Address
            </div>
            <div className="flex flex-row items-center mt-[10px]">
                <Profile width={50} height={50} selected={1} />
                <div className="flex flex-col">
                    <div className="text-[#00dd25]">
                        Alek
                    </div>
                    <div>
                        Teleod aleoe
                    </div>
                </div>
            </div>

            <div className="flex flex-row  items-center mt-[10px]">
                <Profile width={50} height={50} selected={1} />
                <div className="flex flex-col">
                    <div className="text-[#00dd25]">
                        Alek
                    </div>
                    <div>
                        Teleod aleoe
                    </div>
                </div>
            </div>
        </div>
    )
}