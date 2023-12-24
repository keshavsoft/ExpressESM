import jwt from 'jsonwebtoken';

let CreateToken = ({ inPassword }) => {
    let LocalToken = process.env.KS_TOKEN_FORADMIN;
    var token = jwt.sign({ Password: inPassword }, LocalToken);
    return token;
};

export { CreateToken };