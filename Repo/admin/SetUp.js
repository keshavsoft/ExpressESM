import { GetFunc as GetFuncDal } from '../../Dal/admin/SetUp.js';

let GetFunc = () => {
    return GetFuncDal({
        FromJson: Config.FromJson,
        FromSqlite: Config.FromSqlite
    });
};

export { GetFunc };