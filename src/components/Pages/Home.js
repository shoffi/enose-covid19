import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            redirect: null,
            isConnected: this.props.isConnected
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) { 
        event.preventDefault();
        let status = true;
        
        if (status) {
            this.setState({
                redirect: '/menu',
                isConnected: true
            });
        }
    }
        

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <div className="relative flex">
                <form onSubmit={this.handleSubmit}
                    className="flex w-2/3 mx-auto pt-20 space-x-6 items-end">
                    <div className="flex-1 text-2xl space-y-3">
                        <div>
                            <p className=" mb-1">ID Perawat</p>
                            <input
                            type="text"
                            value={this.props.nurseId} 
                            onChange={this.props.setNurseId}
                            className="w-full font-semibold px-4 py-2 bg-gray-200 placeholder-gray-400 outline-none border-4 border-gray-200 focus:border-gray-900 rounded-lg"
                            placeholder="ID Perawat"
                            />
                        </div>
                        <div>
                            <p className=" mb-1">Ruangan</p>
                            <div className="flex items-center bg-gray-200 border-4 border-gray-200 rounded-lg cursor-pointer">
                                <p className="flex-1 font-semibold px-4 py-2">Pilih Ruangan</p>
                                <svg class="w-8 h-8 text-gray-400 mx-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </div>
                    </div>
                    <button className="flex items-center justify-center w-48 h-48 bg-gray-900 focus:outline-none rounded-md">
                        <div className="justify-center text-white">
                            <svg class="mx-auto w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
                            <p className="text-xl font-semibold">Masuk</p>
                        </div>
                    </button>
                </form>

                {/* Modal to select Ruangan */}
                <div className="absolute bg-white w-full pt-12">
                    <div className="mx-auto w-1/2 bg-white border-4 border-gray-900 rounded-lg overflow-hidden">
                        <div className="flex items-center p-3">
                            <div className="flex-1 leading-tight">
                                <p className="text-2xl font-semibold">Pilih Ruangan</p>
                                <span className="text-gray-600">Scroll kebawah untuk memilih</span>
                            </div>
                            <div>
                                <button className="bg-gray-900 px-8 py-3 text-xl text-white rounded-md">Simpan</button>
                            </div>
                        </div>
                        <div className="bg-gray-200 h-64 overflow-y-scroll divide-y text-2xl text-gray-700">
                            <div className="px-3 py-4 hover:bg-gray-900 hover:text-white">Ruangan ICU</div>
                            <div className="px-3 py-4 hover:bg-gray-900 hover:text-white">Ruangan ICU</div>
                            <div className="px-3 py-4 hover:bg-gray-900 hover:text-white">Ruangan ICU</div>
                            <div className="px-3 py-4 hover:bg-gray-900 hover:text-white">Ruangan ICU</div>
                            <div className="px-3 py-4 hover:bg-gray-900 hover:text-white">Ruangan ICU</div>
                            <div className="px-3 py-4 hover:bg-gray-900 hover:text-white">Ruangan ICU</div>
                            <div className="px-3 py-4 hover:bg-gray-900 hover:text-white">Ruangan ICU</div>
                            <div className="px-3 py-4 hover:bg-gray-900 hover:text-white">Ruangan ICU</div>
                        </div>
                    </div>
                </div>

                {/* <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>ID Perawat:</label>
                        <input 
                            className="form-control" type="text" 
                            value={this.props.nurseId} 
                            onChange={this.props.setNurseId}
                            style={{ 
                                fontSize: "35px"
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label>Ruangan:</label>
                        <select 
                            className="form-control" 
                            value={this.props.ruangId} 
                            onChange={this.props.setRuangId}
                            style={{ 
                                fontSize: "35px"
                            }}
                        >
                            <option value="">Pilih Ruangan</option>
                            <option value="1">Ruang ICU</option>
                            <option value="2">Ruang Rawat Inap</option>
                        </select>
                    </div>
                    <div className="form-group text-center">
                        <input 
                            type="submit" 
                            style={{
                                borderRadius:'20px',
                                fontSize: "35px"
                            }} 
                            className="btn btn-primary" 
                            value="Masuk"
                        />
                    </div>
                </form> */}
            </div>
        );
    }
}

export default Home;
