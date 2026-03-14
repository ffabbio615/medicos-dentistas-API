export function volunteerMiddleware(req, res, next){

    const { name, tel, email, message } = req.body;

    if(!name || !tel || !email || !message){
        return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){
        return res.status(400).json({ error: "Email inválido." });
    }

    const telRegex = /^\(\d{2}\) \d{4}-\d{5}$/;

    if(!telRegex.test(tel)){
        return res.status(400).json({ error: "Telefone inválido." });
    }

    next();
}