// import { StartFunc as StartFuncKLowDb } from '../../../KLowDb/KData/JSON/UserData/CustomersReadFile.js';
import { StartFuncSync as StartFuncKLowDb } from '../../../KLowDb/KData/JSON/UserData/OrdersJsonFile/ReadFile.js';
import { StartFuncNoSync as StartFuncWriteFile } from '../../../KLowDb/KData/JSON/UserData/OrdersJsonFile/WriteFile.js';

let GetFuncDal = () => {
    return StartFuncKLowDb();
};

let PostFuncDal = ({inDataToInsert}) => {
    return StartFuncWriteFile({ inDataToInsert });

};

export { GetFuncDal, PostFuncDal };