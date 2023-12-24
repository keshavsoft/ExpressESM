import { StartFunc as StartFuncKLowDb } from '../../KLowDb/KData/JSON/Login/UserData/ReadFile.js';

let GetFunc = async () => {
    return await StartFuncKLowDb();
};

export { GetFunc };