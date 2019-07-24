import React, { Component } from 'react';
import '../dataTable/dataTable.css';

import DateComp from '../dateComp/dateComp';

import { postData } from '../../Services/Services';
import { DataType } from '../../Enum';
import Config from '../../config';

class DataTable extends Component {
    constructor() {
        super();
    }

    moveTechnicalAnalysis = (iURL, event) => {
        event.preventDefault();
        let newURL = iURL + "/StartTechnicalAnalysis";
        postData({ 'url': newURL }, function (iData) {
            console.log(iData);
        });
    }

    manageOperations = (iDSXData) => {
        if (iDSXData.state == "Under Correction") {
            return <td>You can close this IR or restart the correction</td>
        }
        else if (iDSXData.state == "Opened") {
            return <td><input type="submit" onClick={this.moveTechnicalAnalysis.bind(this, iDSXData.uri)} value="Start TA" /></td>
        }
        else if (iDSXData.state == "Technical Analysis") {
            return <td>You can Move IR Under Correction by seeting TargetDate and Analysis</td>
        }
        else {
            return <td>I dont know the operation</td>
        }
    }

    manageTargetDate = (iDSXData) => {
        if (iDSXData.targetDate != undefined) {
            return <td>{iDSXData.targetDate} </td>
        }
        else if (iDSXData.state == "Technical Analysis") {
            return <DateComp url={iDSXData.uri} />
        }
        else {
            return <td>Target Date Not Set </td>
        }
    }

    renderIRComp = () => {
        return <table className="mydataTable">
            <thead>
                <tr>
                    <th>IR</th>
                    <th>State</th>
                    <th>Flag</th>
                    <th>Target Date</th>
                    <th>Do Opeartion</th>
                </tr>
            </thead>
            {this.props.data.map(function (iDSXData, index) {
                return (
                    <tbody >
                        <tr key={index}>
                            <td><a href={Config.dsxBaseURL + iDSXData.id} target="_default">{iDSXData.name}</a></td>
                            <td>{iDSXData.state}</td>
                            <td>{iDSXData.ecoType.value}</td>
                            {this.manageTargetDate(iDSXData)}
                            {this.manageOperations(iDSXData)}
                        </tr>

                    </tbody>

                )

            }.bind(this))}
        </table>
    }

    renderFunctionComp = () => {
        return <table className="mydataTable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>State</th>
                    <th>Description</th>
                    <th>FCF Risk</th>
                </tr>
            </thead>
            {this.props.data.map(function (iDSXData, index) {
                return (
                    <tbody key={index}>
                        <tr>
                            <td><a href={Config.dsxBaseURL + iDSXData.id} target="_default">{iDSXData.name}</a></td>
                            <td>{iDSXData.state}</td>
                            <td>{iDSXData.description}</td>
                            <td>{iDSXData.riskAssessmentVSFCF.value}</td>
                        </tr>

                    </tbody>

                )

            }.bind(this))}
        </table>
    }

    renderDataComp = () => {
        if (this.props.dataType === DataType.IR) {
            return this.renderIRComp();
        } else if (this.props.dataType === DataType.Functions) {
            return this.renderFunctionComp();
        }
    }

    render() {
        return (
            this.renderDataComp()
        );
    }
};

export default DataTable;