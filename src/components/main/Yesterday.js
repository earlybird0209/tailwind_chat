import { useState, useEffect } from "react"
import MessageBar from "./MessageBar"
import ReponseComponent from "./ReponseComponent"
import MessageBar2 from "./MessageBar2"

export default function Yesterday(props) {
    return (
        <div className="w-full">
            < div className="flex flex-row items-center  mt-[50px]">
                <div className="w-full h-[0px] border-[1px] border-[#ddd]">
                </div>
                <div className="w-[350px] text-[#FFF] px-[20px]">
                    Wednesday, Jan 19
                </div>
                <div className="w-full h-[0px] border-[1px] border-[#ddd]">
                </div>
            </div>
            <MessageBar />
            <MessageBar2 />
            <MessageBar />
            <MessageBar />
            <MessageBar />
            <ReponseComponent />
        </div>
    )
}