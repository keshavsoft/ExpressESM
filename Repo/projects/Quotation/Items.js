import { GetFuncDal, PostFuncDal, PatchFuncDal } from '../../../Dal/projects/Quotation/Items.js';

let GetFuncRepo = () => {
    return GetFuncDal();
};

let PostFuncRepo = ({ inDataToInsert }) => {
    return PostFuncDal({ inDataToInsert });
};

let PatchFuncRepo = ({ UuId, inDataToInsert }) => {
    return PatchFuncDal({ UuId, inDataToInsert });
};

export { GetFuncRepo, PostFuncRepo, PatchFuncRepo };