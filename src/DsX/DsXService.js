import axios from 'axios';
import { DataType } from '../Enum';
import Config from '../config';



export const commandRunner = {
    "getIRs": {
        "command": function (iUser, iCallback) {
            let options = {
                url: Config.dsxAuthWrapperService,
                method: 'POST',
                headers: {
                    'Content-type': 'text/plain'
                },
                data: { url: Config.irURL, Owner: iUser }
            };
            axios(options)
                .then(function (iResponseData) {
                    iCallback(DataType.IR, JSON.parse(iResponseData.data));
                }).catch(function (iReason) {
                    console.error("Error", iReason)
                })
        }
    }
    ,
    "priorityIRs": {
        "command": function (iUser, iCallback) {
            let options = {
                url: Config.dsxAuthWrapperService,
                method: 'POST',
                headers: {
                    'Content-type': 'text/plain'
                },
                data: { url: Config.irURL, Owner: iUser, Management: "Critsit" }
            };
            axios(options)
                .then(function (iResponseData) {
                    iCallback(DataType.IR, JSON.parse(iResponseData.data));
                }).catch(function (iReason) {
                    console.error("Error", iReason)
                })
        }
    },
    "externalIRs":
    {
        "command": function (iUser, iCallback) {
            let options = {
                url: Config.dsxAuthWrapperService,
                method: 'POST',
                headers: {
                    'Content-type': 'text/plain'
                },
                data: { url: Config.irURL, Owner: iUser, DSXECO_ECOType: "External" }
            };
            axios(options)
                .then(function (iResponseData) {
                    iCallback(DataType.IR, JSON.parse(iResponseData.data));
                }).catch(function (iReason) {
                    console.error("Error", iReason)
                })
        }
    },
    "internalIRs":
    {
        "command": function (iUser, iCallback) {
            let options = {
                url: Config.dsxAuthWrapperService,
                method: 'POST',
                headers: {
                    'Content-type': 'text/plain'
                },
                data: { url: Config.irURL, Owner: iUser, DSXECO_ECOType: "Internal" }
            };
            axios(options)
                .then(function (iResponseData) {
                    iCallback(DataType.IR, JSON.parse(iResponseData.data));
                }).catch(function (iReason) {
                    console.error("Error", iReason)
                })
        }
    },
"dsxFunctions":{
    "command": function (iUser, iCallback) {
        let options = {
            url: Config.dsxAuthWrapperService,
            method: 'POST',
            headers: {
                'Content-type': 'text/plain'
            },
            data: { url: Config.functionURL, owner: iUser  }
        };
        axios(options)
            .then(function (iResponseData) {
                // console.log(JSON.parse(iResponseData.data));
                iCallback(DataType.Functions, JSON.parse(iResponseData.data));
            }).catch(function (iReason) {
                console.error("Error", iReason)
            })
    }
}
}

