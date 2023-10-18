import { useState, useEffect } from "react"
import MessageBar from "./MessageBar"

export default function MessageInput(props) {
    return (
        <div className="absolute bottom-0 mt-[0px] w-full p-[50px]">
            <div className="flex items-center px-[20px] h-[80px] bg-color4 border-[4px] border-[#FFFF33] rounded-[10px]">
                <input className="bg-color4 w-full h-[50px] border-[0px] " placeholder="Message chat" />
            </div>
        </div>
    )
}