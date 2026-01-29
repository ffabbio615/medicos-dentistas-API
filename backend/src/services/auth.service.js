import jwt from "jsonwebtoken";

const secretKey = process.env.LOGIN_SECRET_KEY;

// Usuário exemplo
const user = {
    username: "admin",
    password: "admin123",
};

export function login(username, password) {
    if (username === user.username && password === user.password) {
        return jwt.sign({
            username: user.username,
        }, secretKey, { expiresIn: '5m' });
    } else {
        return null;
    };
}
