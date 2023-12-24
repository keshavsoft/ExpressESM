let PostFunc = (req, res) => {
    console.log("aaaaaaaa : ", req.body, process.env.KSPassword);
    res.end();
};

export { PostFunc };