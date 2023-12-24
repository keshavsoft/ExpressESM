import { GetFunc as GetFuncRepo } from '../../Repo/login/userDataRepo.js';

let GetFunc = async (req, res) => {
    let LocalFromRepo = await GetFuncRepo();
    res.json(LocalFromRepo);
};

export { GetFunc };