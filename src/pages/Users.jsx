import { CiUser } from "react-icons/ci";
import { useEffect } from "react";
import { FaCircleUser } from "react-icons/fa6";


export const Users = () => {
    useEffect(() => {
        const exit = document.querySelector(".exit-btn");
        const btn = document.querySelector(".exit");

        const toggleExit = () => {
            if (btn.classList.contains("open_close_exit")) {
                btn.classList.remove("open_close_exit");
            } else {
                btn.classList.add("open_close_exit");
            }
        };
        const clickAnimationExit = () =>{
            btn.classList.add("released")
            setTimeout(()=>{
                btn.classList.remove("released")
            },200)
        }

        exit.addEventListener("click", toggleExit);
        btn.addEventListener("click",clickAnimationExit)


        return () => {
            exit.removeEventListener("click", toggleExit);
        };
    }, []);

    return (
        <>
            <div className="left">
                <div className="left-person">
                    <span className={"admin"}>Hüseyin Sayım</span>
                    <div className="options">
                        <button type="button" style={{background:"#d1213a", color:"black"}} className="exit inp btn btn-light">Çıkış Yap</button>
                        <CiUser className={"exit-btn"} size={"35px"}/>
                    </div>
                </div>
                <div className="persons">
                    <div className="input">
                        <input type="text" className="form-control inp-search-person-bottom" aria-label="Sizing example input"
                               aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div className="my-persons">
                        <div className="first-person">
                            <div className="avatar"><FaCircleUser size={"50px"}/></div>
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className="later-person">
                            <div className="avatar"><FaCircleUser size={"50px"}/></div>
                            Lorem ipsum
                        </div>
                        <div className="first-person">
                            <div className="avatar"><FaCircleUser size={"50px"}/></div>
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className="later-person">
                            <div className="avatar"><FaCircleUser size={"50px"}/></div>
                            Lorem ipsum
                        </div>
                        <div className="first-person">
                            <div className="avatar"><FaCircleUser size={"50px"}/></div>
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className="later-person">
                            <div className="avatar"><FaCircleUser size={"50px"}/></div>
                            Lorem ipsum
                        </div>
                        <div className="first-person">
                            <div className="avatar"><FaCircleUser size={"50px"}/></div>
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className="later-person">
                            <div className="avatar"><FaCircleUser size={"50px"}/></div>
                            Lorem ipsum
                        </div>
                        <div className="first-person">
                            <div className="avatar"><FaCircleUser size={"50px"}/></div>
                            Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}