import {login} from "../services/auth.service.js";

export function loginController(req, res) {
    const { username, password } = req.body;
    const token = login(username, password);

    if (token){
        return res.status(200).json({ token });
    } else {
        return res.status(401).json({ message: "Usuário ou senha inválidos." });
    }
}