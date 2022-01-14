import React ,{ useState } from 'react';
import { Button } from 'react-bootstrap';
import './homeSidebar.css'
import { useHistory } from "react-router-dom";
import ModalForm from "../components/ModalForm";
import PopupForm from "../components/PopupForm";
const HomeSidebar = () => {
    const history = useHistory();
    const [show, setShow] = useState(false);


    const handleCLick = (e) => {
        e.preventDefault();
        history.push("/announcingVote");
      };
    return (
        <div className="home">
            <div className="home-sidebar">
                <div className="home-sidebar-title">
                    <h2>Title here</h2>
                </div>
                <div className="home-sidebar-content">
                    <h2>Content here</h2>
                </div>
                <div className="home-sidebar-members">
                    <div className="vote">
                        <h4 className="nameVote">Công Viên Yên Sở</h4> <h5 className="quantilyVote">10</h5>
                    </div>
                    <div className="vote">
                        <h4 className="nameVote">Công Viên Hòa Bình</h4> <h5 className="quantilyVote">10</h5>
                    </div>
                    <div className="vote">
                        <h4 className="nameVote">Công Viên Thống Nhất</h4> <h5 className="quantilyVote">10</h5>
                    </div>
                    <div className="vote">
                        <h4 className="nameVote">Công Viên Nghĩa Đô</h4> <h5 className="quantilyVote">10</h5>
                    </div>
                    <div className="vote">
                        <h4 className="nameVote">Công Viên Thủ Lệ</h4> <h5 className="quantilyVote">5</h5>
                    </div>
                </div>
                {/* <div className="home-sidebar-location">
                    
                </div> */}
                
                    <div className="btnEndVote">
                    <button style={{width:"95%"}} onClick={() => setShow(true)}>
                      Địa Chỉ
                    </button>
                    <ModalForm
                      show={show}
                      onHide={() => setShow(false)}
                      ModalTile={""}
                      ModalChildren={<PopupForm value={window.location.href}/>}
                      size= "md"
                    /> 
                    </div>
                <div className="btnEndVote">
                    <button type="submit" 
                  onClick={(e) => handleCLick(e)}>END VOTE</button>
                </div>
            </div>  
        </div>
    )
}

export default HomeSidebar
