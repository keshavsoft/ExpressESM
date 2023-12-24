import { GetFunc as GetFuncDal } from '../../Dal/login/userDataDal.js';

let GetFunc = async () => {
    return await GetFuncDal();
};

export { GetFunc };