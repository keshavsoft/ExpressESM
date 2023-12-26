import { PostFunc as PostFuncDal } from '../../Dal/admin/SetUp.js';

let PostFunc = () => {
    return PostFuncDal();
};

export { PostFunc };