import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';
// import { AiFillSetting } from 'react-icons/ai';
// import Clock from '../Clock';

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: null
        }
    }

    powerOff () {
        this.props.disconnect()
    }

    showModal () {
        alert('alert alert !')
    }

    render () 
    {

        let {isConnected, nurseId} = this.props
        let info_navbar
        
        if(nurseId !== ''){
            info_navbar =   <>
                            <div className="">
                                <span className="text-lg font-light opacity-50">Perawat</span>
                                <p className="text-xl font-bold">{this.props.nurseId}</p>
                            </div>
                            <div>
                                <span className="text-lg font-light opacity-50">Ruangan</span>
                                <p className="text-xl font-bold">{this.props.ruangId}</p>
                            </div>
                            <div>
                                <span className="text-lg font-light opacity-50">ID Pasien</span>
                                <p className="text-xl font-bold">{this.props.patientId}</p>
                            </div>
                            
                            {/* <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <span className="nav-link" href="#">Perawat: {this.props.nurseId}</span>
                                </li>
                                <li className="nav-item active">
                                    <span className="nav-link" href="#">Ruangan: {this.props.ruangId}</span>
                                </li>
                                <li className="nav-item active">
                                    <span className="nav-link" href="#">Pasien: {this.props.patientId}</span>
                                </li>
                            </ul> */}
                        </>
        }

        let button_off

        if(isConnected) {
            button_off =    <>
                                <Link to="/">
                                    <span 
                                        style={{
                                            borderRadius:'100%', 
                                            margin: 'auto',
                                            padding: 'auto',
                                            width:'100%'
                                        }} 
                                        className="btn btn-danger" 
                                        onClick={() => this.powerOff()}
                                    >
                                        <FaPowerOff/>
                                    </span>
                                </Link>
                            </>
        }
        
        return (
            <>
            {/* Bottom nav bar */}
            <div className="flex items-center justify-between bg-gray-900">
                <div className="flex px-4 space-x-8 leading-tight text-white">
                    <div className="h-12 text-xl font-semibold">
                        {this.props.rumahSakit}
                    </div>
                    {info_navbar}
                    {/* <div>
                        <span className="text-lg font-light opacity-75">Perawat</span>
                        <p className="text-2xl font-bold">2</p>
                    </div>
                    <div>
                        <span className="text-lg font-light opacity-75">Ruangan</span>
                        <p className="text-2xl font-bold">Ruangan ICU (2)</p>
                    </div>
                    <div>
                        <span className="text-lg font-light opacity-75">ID Pasien</span>
                        <p className="text-2xl font-bold">018</p>
                    </div> */}
                </div>
                <div className="flex">
                    <Link to='/pengaturan'>
                        <button className="p-4 flex items-center text-xl focus:outline-none">
                            <svg className="w-8 h-8 text-white mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            <p className="text-white">Settings</p>
                        </button>
                    </Link>
                    <Link to='/'>
                        <button onClick={() => this.powerOff()} className="p-4 flex bg-red-600 items-center focus:outline-none text-xl">
                            <svg className="w-8 h-8 text-white mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 6a7.75 7.75 0 1 0 10 0" />
                            <line x1="12" y1="4" x2="12" y2="12" />
                            </svg>
                            <p className="text-white">Power</p>
                        </button>
                    </Link>
                </div>
            </div>

                {/* <nav 
                    className="navbar navbar-expand-lg" 
                    style={{ 
                        backgroundColor:"#1AB0EB", 
                        color:"#3E4095", 
                        fontWeight: "Bold",
                        fontSize: "35px"
                    }}
                >
                    <div 
                        className="navbar-brand"
                        style={{ 
                            fontSize: "35px"
                        }}
                    >{this.props.rumahSakit}</div>

                    <div className="navbar-collapse">
                    
                        {info_navbar}

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <span className="nav-link" href="#"><Clock></Clock></span>
                            </li>
                            <li className="nav-item active">
                                {button_off}
                            </li>
                            <li>
                                <Link to='/pengaturan'>
                                <span 
                                    style={{
                                        color: "primary",
                                        cursor: "pointer"
                                    }}   
                                >
                                    <AiFillSetting/>
                                </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav> */}
            </>
        )
    }
}

export default Nav;
