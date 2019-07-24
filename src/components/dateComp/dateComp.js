import React, { Component } from 'react';
import { postData } from '../../Services/Services';
class DateComp extends Component {
    constructor() {
        super();
        this.state = {
            targetDate: "",
            date: "",
            analysis: "",
            url: ""
        }
        

    }
    componentWillMount() {
        let postURL = this.props.url + '/StartCorrection';
        this.setState({ url: postURL });
    }

    dateSubmitHandler =(event)=> {
        event.preventDefault();
        postData(this.state, function (iSuccessData) {
            console.log(iSuccessData);
        });
    }
    setDateValue = (event)=> {
        event.preventDefault();
        let dateArr = event.target.value.split('-');
        let myDate = dateArr[1] + '-' + dateArr[2] + '-' + dateArr[0] + '.12.00';
        this.setState({ targetDate: myDate, date:  event.target.value});
    }

    setAnalysisValue =(event)=> {
        event.preventDefault();
        this.setState({ analysis: event.target.value })
    }

    render() {
        return (
            <div className="date">
                <form onSubmit={this.dateSubmitHandler}>
                    <input className="dateinput"
                        value={this.state.date}
                        onChange={this.setDateValue}
                        name="date" type="date" placeholder="Target Date" required />
                    <input className="analysisinput"
                        value={this.state.analysis}
                        onChange={this.setAnalysisValue}
                        name="date" type="text" placeholder="Analysis" required />
                    <button className="dateSubmit" >Change Target Date</button>
                </form>
            </div>
        );
    }
}

export default DateComp;
