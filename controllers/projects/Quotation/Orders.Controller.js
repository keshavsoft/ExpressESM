import { GetFuncRepo, PostFuncRepo } from '../../../Repo/projects/Quotation/Orders.js';

let GetFunc = (req, res) => {
    let LocalFromRepo = GetFuncRepo();

    res.status(200).json(LocalFromRepo);
};

let PostFunc = (req, res) => {
    let LocalinDataToInsert = req.body.inDataToInsert;
    let LocalFromRepo = PostFuncRepo({ inDataToInsert: LocalinDataToInsert });

    res.status(200).json(LocalFromRepo);
};

export { GetFunc, PostFunc };