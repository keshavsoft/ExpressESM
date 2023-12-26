import { GetFuncDal, PostFuncDal, PatchFuncDal } from '../../../Dal/projects/Quotation/Orders.js';

let GetFuncRepo = () => {
    return GetFuncDal();
};

let PostFuncRepo = ({ inDataToInsert }) => {
    return PostFuncDal({ inDataToInsert });
};

let PatchFuncRepo = ({ inDataToInsert }) => {
    return PatchFuncDal({ inDataToInsert });
};

export { GetFuncRepo, PostFuncRepo, PatchFuncRepo };