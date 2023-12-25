import { GetFuncDal, PostFuncDal } from '../../../Dal/projects/Quotation/Customers.js';

let GetFuncRepo = async () => {
    return await GetFuncDal();
};

let PostFuncRepo = ({ inDataToInsert }) => {
    return PostFuncDal({ inDataToInsert });
};

export { GetFuncRepo, PostFuncRepo };