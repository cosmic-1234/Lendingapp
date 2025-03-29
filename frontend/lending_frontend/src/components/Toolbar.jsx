
import goto from "../assets/goto.svg"
import setting from "../assets/settings.svg"
import help from "../assets/help.svg"
import beta from "../assets/beta.svg"
 console.log(toolbar.visible);

const Toolbar = ({tool})=>{
    
    if(tool){
        return (
            <>
            <div id="left main div" className=" bg-gradient-to-r from-gray-50 to-gray-100 w-2/11 flex flex-col">
                    <div className="flex flex-col gap-4 text-xl mt-2 ">
                        
                        <div className="flex justify-center items-center cursor-pointer "><p className="width-30 px-1 text-2xl hover:font-semibold font-sans">About us</p>
                        <img className="h-7" src={goto} alt="" />
                        </div>
                        <div className="flex justify-center items-center cursor-pointer "><p className="width-30 px-1 text-2xl hover:font-semibold font-sans">Privacy statement</p>
                        <img className="h-7" src={goto} alt="" />
                        </div>
                        <div className="flex justify-center items-center cursor-pointer "><p className="width-30 px-1 text-2xl hover:font-semibold font-sans">Fund us</p>
                        <img className="h-7" src={goto} alt="" />
                        </div>
                    </div>
                    <div className=" mt-90 h-36 flex-col">
                        <div className="flex items-center w-36  mt-8 hover:cursor-pointer">
                        <img className="w-7 h-6" src={help} alt="" />
                            <p className="  text-xl hover:font-semibold">Need help?</p>
                        </div>
                        <div className="flex items-center w-30 mt-2 cursor-pointer">
                        <img className="w-7 h-6" src={beta} alt="" />
                            <p className=" text-xl hover:font-semibold">Use beta</p>
                        </div>
                        <div className="flex items-center w-27 mt-2 cursor-pointer">
                        <img className="w-7 h-6" src={setting} alt="" />
                            <p className=" text-xl hover:font-semibold">Settings</p>
                        </div>
                    </div>
                    </div>
                    </>
        )
    }
    else {
        return (
            <></>
        )
    }
}
export default Toolbar;