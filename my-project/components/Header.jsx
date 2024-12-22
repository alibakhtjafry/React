// import React from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// bg-gradient-to-r from-fuchsia-600 to-purple-600
export default function Header() {
  return (
    <>
    {/* bg-gradient-to-r from-[rgb(252,146,40)] to-[rgb(251,113,133)] */}
        <div className="flex flex-row justify-between items-center w-full h-[70px] bg-gradient-to-r from-[rgb(252,146,40)] via-[rgb(251,113,133)] to-[rgb(244,114,182)]">
    
            <div className="flex items-center justify-center gap-[5px] p-[3px] h-[40px] w-[40px] cursor-pointer hover:border-[1px] m-2
                            hover:border-solid hover:border-white hover:rounded-[4px]">
                <MenuOutlinedIcon className="!text-[22px] text-white" />
            </div>

            <div className="flex items-center ml-auto gap-[5px]">

                <div className="flex items-center justify-center  p-[3px] h-[40px] w-[40px] cursor-pointer hover:border-[1px] m-2 mr-[-13px]
                            hover:border-solid hover:border-white hover:rounded-[4px]">
                <NotificationsNoneOutlinedIcon className="!text-[22px] text-white" />
                </div>

                <div className="flex items-center justify-center p-[3px] h-[40px] w-[40px] cursor-pointer hover:border-[1px] m-2
                            hover:border-solid hover:border-white hover:rounded-[4px]">
                <AccountCircleOutlinedIcon className="!text-[22px] text-white" />
                </div>

            </div>
        
        </div>



    </>
  )
}