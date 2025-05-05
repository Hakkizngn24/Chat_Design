import { useEffect } from "react";
import { TbPointFilled } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";

export const Chat = () => {
        useEffect(() => {
            const search_inp_chat = document.querySelector(".inp-search-chat");
            const search_icon_chat = document.querySelector(".search-chat");
            const btn_send = document.querySelector(".btn-send");
            const inp_send = document.querySelector(".inp_send");

            const toggleSearchInput = () => {
                if (search_inp_chat.classList.contains("open_close")) {
                    search_inp_chat.classList.remove("open_close");
                } else {
                    search_inp_chat.classList.add("open_close");
                }
            };
            const checkInp = () => {
                if (inp_send.value === "") {
                    btn_send.style.display = "none";
                } else {
                    btn_send.style.display = "flex";
                }
            }
            const clickAnimationSend = () =>{
                btn_send.classList.add("released")
                setTimeout(()=>{
                    btn_send.classList.remove("released")
                },200)
            }

            document.addEventListener("input",checkInp);
            search_icon_chat.addEventListener("click", toggleSearchInput);
            btn_send.addEventListener("click",clickAnimationSend)


            return () => {
                search_icon_chat.removeEventListener("click", toggleSearchInput);
            };
        }, []);
    const messages = [
        {
            "sender_id" : 1,
            "receiver_id" : 2,
            "message" : "merhaba"
        },
        {
            "sender_id" : 2,
            "receiver_id" : 1,
            "message" : "merhaba cano"
        },
        {
            "sender_id" : 1,
            "receiver_id" : 2,
            "message" : "naptın nasılsın"
        },
        {
            "sender_id" : 2,
            "receiver_id" : 1,
            "message" : "iyi sen naptın"
        },
        {
            "sender_id" : 1,
            "receiver_id" : 2,
            "message" : "iyi bende"
        }
    ]
    return (
        <>
            <div className="display">
                <div className="top">
                    <TbPointFilled color={"green"} className={"online"}/>
                    <TbPointFilled color={"#4c4c4c"} className={"no-online"}/>
                    <span className="users-top">Hakkı Zengin</span>
                    <input type="text" className="form-control inp-search-chat" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"/>
                    <BiSearchAlt size={"35px"} className={"search-chat"} />
                </div>
                <div className="chat">
                    <div className="chatting">
                        {
                            messages.map(item => (
                                item.sender_id === 1 ? (
                                    <div className="person-one">
                                      <p className={"person-one-chat"}>{item.message}</p>
                                     </div> ):(
                                    <div className="person-two">
                                        <p className={"person-two-chat"}>{item.message}</p>
                                    </div>)
                            ))
                        }
                    </div>
                    <div className="send">

                        <div className="inp-btn">
                            <div className="input-group mb-3">
                                <input placeholder={"mesaj..."} type="text" className="form-control inp inp_send" aria-label="Sizing example input"
                                       aria-describedby="inputGroup-sizing-default"/>
                                <button type="button" className="btn-send btn btn-light">Gönder</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}