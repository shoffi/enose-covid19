import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Pages/Home";
import Menu from "./components/Pages/Menu";
import AmbilSample from "./components/Pages/AmbilSample";
import MainChart from "./components/Pages/MainChart";

const { ipcRenderer } = window; 

class App extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            nurseId: "",
            patientId: "",
            isConnected: false,
            rumahSakit: '',
        };

        this.setNurseId = this.setNurseId.bind(this);
        this.setPatientId = this.setPatientId.bind(this);
        this.connect = this.connect.bind(this);
    }

    componentDidMount () {
      ipcRenderer.send('mounted');
      ipcRenderer.on('mountedResponse', (event, rumahSakit) => {
        this.setState({ 
          rumahSakit: rumahSakit
        })
      });

      ipcRenderer.send('coba', 'Satu dua tiga empat');
      ipcRenderer.on('cobaResponse', (event, response) => {
        console.log(response)
      });
    }

    connect() {
      let connectStatus
      ipcRenderer.send('connect');
      ipcRenderer.on('connectResponse', (event, connectResponse, status) => {
          alert(connectResponse + ' ' + status)
          connectStatus = status
          if(status){
              this.setState({ 
                isConnected: true
              })
          }
      });
      return connectStatus;
    }

    disconnect () {
      ipcRenderer.send('disconnect');

      ipcRenderer.on('disconnectResponse', (event, disconnectResponse) => {
          alert(disconnectResponse)
          this.setState({
              isConnected: false
          });
          
      });
    }

    setNurseId(event) {
      this.setState({
          nurseId: event.target.value,
      });
    }

    setPatientId(event) {
      this.setState({
          patientId: event.target.value,
      });
      console.log(this.state.patientId)
    }

    render() {
      return (
        <div className="">
          <Nav
              nurseId={this.state.nurseId}
              rumahSakit={this.state.rumahSakit}
          />
          <div className="content">
            <Router>
              
              <Route path='/' exact>
                  <Home
                      connect={this.connect}
                      setNurseId={this.setNurseId}
                      nurseId={this.state.nurseId}
                  />
              </Route>

              <Route path='/menu' exact>
                  <Menu/>
              </Route>
              
              <Route path='/ambil-sample' exact>
                  <AmbilSample
                    setPatientId={this.setPatientId}
                    patientId={this.state.patientId}
                  />
              </Route>
              <Route path='/history' exact>
                  <Menu/>
              </Route>
              <Route path='/data-baru' exact>
                  <Menu/>
              </Route>

              <Route path='/main-chart' exact>
                  <MainChart></MainChart>
              </Route>

            </Router>
          </div>
        </div>
      );
    }
}

export default App;
