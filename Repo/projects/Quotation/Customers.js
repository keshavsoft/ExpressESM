import { GetFuncDal, PostFuncDal } from '../../../Dal/projects/Quotation/Customers.js';

let GetFuncRepo = async () => {
    return await GetFuncDal();
};

let PostFuncRepo = async () => {
    return await PostFuncDal();
};

export { GetFuncRepo, PostFuncRepo };