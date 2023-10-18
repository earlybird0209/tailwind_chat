import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Yesterday from "../components/main/Yesterday";
import Today from "../components/main/Today";
import ProfileComponent from "../components/right/ProfileComponent";
import MessageInput from "../components/main/MessageInput";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="w-full  h-screen flex flex-row  bg-color3">
            <div className="flex relative h-screen basis-4/5 flex-col ">
                <Yesterday />
                <Today />
                <div>
                    <MessageInput />
                </div>
            </div>
            <div className="flex basis-1/5 rounded-[5px] bg-color1 px-[10px] py-[40px]">
                <ProfileComponent />
            </div>
        </div>
    )
}