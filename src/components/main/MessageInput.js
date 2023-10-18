import { useState, useEffect } from "react"
import MessageBar from "./MessageBar"
import PlusIcon from '../../assets/plus.png'
import EmojiIcon from '../../assets/emoji.png'

export default function MessageInput(props) {
    return (
        <div className=" bottom-0 mt-[0px] w-full p-[20px] md:p-[20px]">
            <div className="flex items-center px-[20px] h-[80px] bg-color4 border-[4px] border-[#FFFF33] rounded-[10px]">
                <div className="w-full flex flex-row items-center justify-between">
                    <img className="h-[30px]" src={PlusIcon} />
                    <input className="px-[20px] bg-color4 w-full h-[50px] border-[0px] " placeholder="Message chat" />
                    <img className="h-[30px]" src={EmojiIcon} />
                </div>
            </div>
        </div>
    )
}