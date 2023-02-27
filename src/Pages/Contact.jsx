import Navbar from '../Component/Navigation'
import {AiFillFacebook, AiFillInstagram, AiOutlineTwitter} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"
import Footer from "../Component/footer"

const Contact = () => { 
    return ( 
        <>
        <Navbar />
        <div className="flex flex-col space-y-[40px] pt-[60px] items-center">
            
            <div className="flex flex-col space-y-[10px] items-center">
                <h1 className="header">Kontak Kami</h1>
                <div className="flex flex-row items-center">
                    <div className="flex flex-col text-end pr-[10px] w-1/2 space-y-[5px]">
                        <p className="text-lg">Kyoto, 182350, Japan</p>
                        <p className="text-lg">+81 3294 199</p>
                    </div>
                    <div className="flex flex-row w-1/2 flex-wrap pl-[10px] space-y-[5px] border-l-4 border-black">
                        <div className="flex flex-row w-1/2 space-x-[5px] items-center">
                            <AiFillFacebook/>
                            <p className="text-lg mt-2">Baymax JP.</p>
                        </div>
                        <div className="flex flex-row w-1/2 space-x-[5px] items-center">
                            <AiFillInstagram/>
                            <p className="text-lg mt-2">@baymax.jp</p>
                        </div>
                        <div className="flex flex-row w-1/2 space-x-[5px] items-center">
                            <BsWhatsapp/>
                            <p className="text-lg mt-2">+81 1209 1439</p>
                        </div>
                        <div className="flex flex-row w-1/2 space-x-[5px] items-center">
                            <AiOutlineTwitter/>
                            <p className="text-lg mt-2">@baymax.jp  </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-[10px] w-[50%]">
                <h1 className="text-xl font-semibold">Kirim pesan langsung</h1>
                <textarea name="" id="" cols="30" rows="5" className="resize-none px-2 py-2 rounded border-2 bg-zinc-400 border-zinc-500 focus:outline-zinc-600 focus:bg-white"></textarea>
                <div className="flex flex-row justify-end w-full">
                    <button style={{backgroundColor: "red", width: "100px", height: "30px", borderRadius: "10px"}}>Send</button>
                </div>
            </div>
            <Footer/>
        </div>
        </>
     );
}
 
export default Contact;