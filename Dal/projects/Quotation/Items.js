// import { StartFunc as StartFuncKLowDb } from '../../../KLowDb/KData/JSON/UserData/CustomersReadFile.js';
import { StartFuncSync as StartFuncKLowDb } from '../../../KLowDb/KData/JSON/UserData/ItemsJsonFile/ReadFile.js';
import { StartFuncNoSync as StartFuncWriteFile } from '../../../KLowDb/KData/JSON/UserData/ItemsJsonFile/WriteFile.js';
import { StartFuncNoSync as StartFuncUpdateFile } from '../../../KLowDb/KData/JSON/UserData/ItemsJsonFile/UpdateFile.js';

let GetFuncDal = () => {
    return StartFuncKLowDb();
};

let PostFuncDal = ({ inDataToInsert }) => {
    return StartFuncWriteFile({ inDataToInsert });
};

let PatchFuncDal = ({ inDataToInsert }) => {
    return StartFuncUpdateFile({ inDataToInsert });
};

export { GetFuncDal, PostFuncDal, PatchFuncDal };