import { GetFuncDal, PostFuncDal } from '../../../Dal/projects/Quotation/Items.js';

let GetFuncRepo = () => {
    return GetFuncDal();
};

let PostFuncRepo = ({ inDataToInsert }) => {
    return PostFuncDal({ inDataToInsert });
};

export { GetFuncRepo, PostFuncRepo };