import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Yesterday from "../components/main/Yesterday";
import Today from "../components/main/Today";
import ProfileComponent from "../components/right/ProfileComponent";
import MessageInput from "../components/main/MessageInput";
import MenuIcon from '../assets/menu.svg'
import CloseIcon from '../assets/close.svg'

export default function Home() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [isMenu, setIsMenu] = useState(true);

    const getWidth = () => {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    };
    const menuClicked = () => {
        setIsMenu(!isMenu)
    }
    const closeClicked = () => {
        setIsMenu(!isMenu)
    }

    useEffect(() => {
        const setResponsiveness = () => {
            setShow(getWidth() > 1024)
        };
        setResponsiveness();
        window.addEventListener('resize', setResponsiveness);
    }, []);

    return (
        <div className="w-screen  h-screen flex flex-col  bg-color3">
            <div className="w-full  h-screen flex flex-row justify-between bg-color3" >
                <div className="flex flex-col w-full justify-between">
                    <div className="flex relative w-full  h-screen flex-col overflow-y-scroll">
                        <div className="p-[20px]">
                            {/* {
                                isMenu ?
                                    <button onClick={menuClicked}>
                                        <img src={MenuIcon} />
                                    </button>
                                    : <button onClick={closeClicked}>
                                        <img src={CloseIcon} />
                                    </button>

                            } */}
                        </div>
                        <Yesterday />
                        <Today />
                    </div>
                    <div className="flex w-full h-[150px]">
                        <div className="w-full">
                            <MessageInput />
                        </div>
                    </div>
                </div>
                {
                    show ?
                        <div className="flex sm:w-[200px]  md:w-[400px] rounded-[5px] bg-color1 px-[10px] py-[40px]">
                            <ProfileComponent />
                        </div>
                        :
                        <>
                        </>
                }
            </div>

        </div>
    )
}