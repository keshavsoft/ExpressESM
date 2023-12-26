// import { PostFunc as PostFuncToLowDb } from '../../KLowDb';
import { StartFunc as StartFuncKLowDb } from '../../KLowDb/KData/JSON/UserData/SetUp.js';

let GetFunc = ({ FromJson, FromSqlite }) => {
    if (FromJson) {
        return StartFuncKLowDb();
    };

    if (FromSqlite) {
      //  return StartFuncKSequelizeReadFile();
    };
};

export { GetFunc };