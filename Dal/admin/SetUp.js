import { PostFunc as PostFuncToLowDb } from '../../KLowDb';

let GetFunc = ({ FromJson, FromSqlite }) => {

  if (FromJson) {
    return StartFuncKLowDb();
};

if (FromSqlite) {
    return StartFuncKSequelizeReadFile();
}

};

export { GetFunc };