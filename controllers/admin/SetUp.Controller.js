import { PostFunc as PostFuncRepo } from "../../Repo/admin/SetUp.js";

let PostFunc = (req, res) => {

    let ResponseData = PostFuncRepo();

    res.status(200).json(ResponseData);
};

export { PostFunc };