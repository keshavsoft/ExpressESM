import { GetFuncDal, PostFuncDal } from '../../../Dal/projects/Ticketing/Ticket.js';

let GetFuncRepo = async () => {
    return await GetFuncDal();
};

let PostFuncRepo = () => {

    return PostFuncDal();
};

export { GetFuncRepo, PostFuncRepo };