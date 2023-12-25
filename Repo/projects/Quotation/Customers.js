import { GetFuncDal, PostFuncDal,PatchFuncDal } from '../../../Dal/projects/Quotation/Customers.js';

let GetFuncRepo = async () => {
    return await GetFuncDal();
};

let PostFuncRepo = ({ inDataToInsert }) => {
    return PostFuncDal({ inDataToInsert });
};

let PatchFuncRepo = ({ inDataToInsert }) => {
    return PatchFuncDal({ inDataToInsert });
};

export { GetFuncRepo, PostFuncRepo, PatchFuncRepo };