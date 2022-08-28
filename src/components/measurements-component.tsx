import React, { Component } from 'react';

class MeasurementsComponent extends Component<{}, { temperature: number, humidity: number, pressure: number }> {

    constructor(props: any) {
        super(props);
        this.state = {
            temperature: -999999,
            humidity: -999999,
            pressure: -999999
        };
    }

    render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card mt-3" >
                                <img className="card-img-top" src="/temp.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h2 className="card-title">Temperature:</h2>
                                    <h3>
                                        {this.state.temperature === -999999 ? "NaN" : this.state.temperature.toFixed(2)} °C
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card mt-3" >
                                <img className="card-img-top" src="/hum.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h2 className="card-title">Humidity:</h2>
                                    <h3>
                                        {this.state.humidity === -999999 ? "NaN" : this.state.humidity.toFixed(2)} %
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card mt-3" >
                                <img className="card-img-top" src="/pres.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h2 className="card-title">Pressure:</h2>
                                    <h3>
                                        {this.state.pressure === -999999 ? "NaN" : this.state.pressure.toFixed(2)} Pa
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
    timerInterval: any;

    componentDidMount() {
        const that = this;
        this.timerInterval = setInterval(() => {
            fetch("http://192.168.1.120:8080/weather", {
                method: "GET"
            }).then(async response => {
                if (response.ok) {
                    return response.json();
                }
                const errorText = await response.text();
                throw Error(errorText);
            }).then(jsonResponse => {
                that.setState({
                    temperature: jsonResponse['temperature'],
                    humidity: jsonResponse['humidity'],
                    pressure: jsonResponse['pressure']
                })
            }).catch(error => alert(error));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerInterval);
    }
}

export default MeasurementsComponent;