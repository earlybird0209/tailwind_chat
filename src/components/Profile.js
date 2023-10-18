import { useState, useEffect } from "react"
import AvatarImg from '../assets/avatar.png'

export default function Profile(props) {
    const { width, height, selected } = props;

    return (
        <div className="relative mx-[6px] md:mx-[16px] " >
            <img className="rounded-full" width={width} height={height} src={AvatarImg} />
            {
                selected == 0 &&
                <div className="" >
                </div>
            }
            {
                selected == 1 &&
                <div className="absolute right-1 top-[38px] z-10 bg-[#00DD33] rounded-full w-[16px] h-[16px]" >

                </div>
            }
            {
                selected == 2 &&
                <div className="absolute right-1 top-[38px]  bg-[#FB0] rounded-full w-[16px]  h-[16px]" >

                </div>
            }

        </div>
    )
}