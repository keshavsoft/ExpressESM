import { GetFuncRepo, PostFuncRepo } from '../../../Repo/projects/Quotation/Customers.js';

let GetFunc = async (req, res) => {
    let LocalFromRepo = await GetFuncRepo();

    res.status(200).json(LocalFromRepo);
};

let PostFunc = (req, res) => {

    let LocalFromRepo = PostFuncRepo();
    res.status(200).json(LocalFromRepo);

};

export { GetFunc, PostFunc };