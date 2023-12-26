import fs from 'fs'
import CommonMock from '../../MockAllow.json'  assert { type: 'json' };
import { ForExistence as ForExistenceCheckKData } from '../CheckJsonFolder.js';

let ForExistence = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalFromCheck = ForExistenceCheckKData();

    LocalReturnData = { ...LocalFromCheck };
    LocalReturnData.KTF = false;

    LocalReturnData.DataPkFolderPath = `${LocalReturnData.JsonFolderPath}/316`;

    try {
        if (fs.statSync(LocalReturnData.DataPkFolderPath).isDirectory()) {
            LocalReturnData.KTF = true;
        } else {
            LocalReturnData.KReason = "DataPkFolderPath: not found!";
        }
    } catch (error) {
        LocalReturnData.KReason = "DataPkFolderPath: not found!";
    };

    return LocalReturnData;
};

if (CommonMock.AllowMock) {
    if (CommonMock.MockKey === "K25") {
        let LocalFromFunc = ForExistence();
        console.log("LocalFromFunc : ", LocalFromFunc);
    };
};

export { ForExistence };