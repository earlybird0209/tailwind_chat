import { useState, useEffect } from "react"
import MessageBar1 from "./MessageBar1"
import ReponseComponent from "./ReponseComponent"

export default function Today(props) {
    return (
        <div>
            <div className="mt-[20px]">
                < div className="flex flex-row items-center">
                    <div className="w-full h-[1px] border-[1px] border-[#ddd]">
                    </div>
                    <div className="text-[#FFF] px-[20px] text-center">
                        Today
                    </div>
                    <div className="w-full h-[1px] border-[1px] border-[#ddd]">
                    </div>
                </div>
                <MessageBar1 />
                <ReponseComponent />
            </div>
        </div>
    )
}