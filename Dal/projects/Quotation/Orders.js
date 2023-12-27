// import { StartFunc as StartFuncKLowDb } from '../../../KLowDb/KData/JSON/UserData/CustomersReadFile.js';
import { StartFuncSync as StartFuncKLowDb } from '../../../KLowDb/KData/JSON/UserData/OrdersJsonFile/ReadFile.js';
import { StartFuncNoSync as StartFuncWriteFile } from '../../../KLowDb/KData/JSON/UserData/OrdersJsonFile/WriteFile.js';
import { StartFuncNoSync as StartFuncUpdateFile } from '../../../KLowDb/KData/JSON/UserData/OrdersJsonFile/UpdateFile.js';

let GetFuncDal = () => {
    return StartFuncKLowDb();
};

let PostFuncDal = ({ inDataToInsert }) => {
    return StartFuncWriteFile({ inDataToInsert });
};

let PatchFuncDal = ({ UuId, inDataToInsert }) => {
    return StartFuncUpdateFile({ UuId, inDataToInsert });
};

export { GetFuncDal, PostFuncDal, PatchFuncDal };