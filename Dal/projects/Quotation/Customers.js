// import { StartFunc as StartFuncKLowDb } from '../../../KLowDb/KData/JSON/UserData/CustomersReadFile.js';
import { StartFunc as StartFuncKLowDb } from '../../../KLowDb/KData/JSON/UserData/CustomersJsonFile/ReadFile.js';
import { StartFuncNoSync as StartFuncWriteFile } from '../../../KLowDb/KData/JSON/UserData/CustomersJsonFile/WriteFile.js';

let GetFuncDal = async () => {
    return await StartFuncKLowDb();
};

let PostFuncDal = () => {
    return StartFuncWriteFile({
        inDataToInsert: {
            CustomerName: "Chakri"
        }
    });

    return "Post From Dal"
};

export { GetFuncDal, PostFuncDal };