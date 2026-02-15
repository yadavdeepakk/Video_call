import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
export default function LandingPage() {


    const router = useNavigate();

    return (
        <div className='landingPageContainer' >
            <nav>
                <div className='navHeader'>
                    <h2>Video Call</h2>
                </div>
                <div className='navlist'>
                    <p onClick={() => {
                        router("/aljk23")
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")

                    }}>Register</p>
                    <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>


            <div className="landingMainContainer">
                <div>
                    <h1 style={{ color: "#000000" }}><span>Connect</span> with your loved Ones</h1>

                    <p style={{ color: "#0300a4", fontSize: "900"}}>Cover distance by Video Call</p>
                    <div role='button'>
                        <Link to={"/auth"}>Start video</Link>
                    </div>
                </div>
                <div>

                    <img src="/mobile1.png" alt="" />

                </div>
            </div>



        </div>
    )
}
