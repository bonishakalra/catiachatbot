import axios from 'axios';
import { commandRunner } from '../DsX/DsXService';
import { DataType } from '../Enum';
import Config from '../config';


export const getNLPResponse = function (iMessage, iUser, iCallback) {
    let options = {
        url: Config.wsURL,
        method: 'POST',
        headers: {
            'Content-type': 'text/plain'
        },
        data: { expression: iMessage }
    };

    // axios(options)
    axios(options)
        .then(function (iResponseData) {
            //  iCallback(iResponseData.data);
            if (commandRunner[iResponseData.data.intent.intentAction] != undefined) {
                commandRunner[iResponseData.data.intent.intentAction].command(iUser, function (iType, iData) {
                    iCallback(iType, iResponseData.data.fulfillment.value, iData);
                });
            } else {
                iCallback(DataType.NoType, iResponseData.data.fulfillment.value);
            }
        }).catch(function (iReason) {
            console.error("Error", iReason)
        });
}

export const getUserLogin = function (iState, iCallback) {
    let options = {
        url: Config.loginURL,
        method: 'POST',
        headers: {
            'Content-type': 'text/plain'
        },
        data: iState
    };
    axios(options)
        .then(function (iResponseData) {
            iCallback(iResponseData.data);
        }).catch(function (iReason) {
            console.error("Error", iReason)
        });

}

export const postData = function (iState, iCallback) {
    let options = {
        url: Config.postURL,
        method: 'POST',
        headers: {
            'Content-type': 'text/plain'
        },
        data: iState
    };
    axios(options)
        .then(function (iResponseData) {
            iCallback(iResponseData.data);
        }).catch(function (iReason) {
            console.error("Error", iReason)
        });

}