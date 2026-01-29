import { useState } from "react";
import "./Login.scss";

export default function Login(){

    const [username, setUsername] =  useState('');
    const [password, setPassword] =  useState('');
    
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
            },
                body: JSON.stringify({ username, password}),
            });
            const data = await response.json();
            if(response.ok){
                alert('Login realizado com sucesso!');
                // Armazenar o token no localStorage ou em um estado global
                localStorage.setItem('token', data.token);
                // Redirecionar para a página de lista de voluntários
                window.location.href = '/volunteer-list';
            } else {
                alert('Falha no login: ' + data.message);
            }
        } catch (error) {
            console.error('Erro durante o login:', error);
            alert('Ocorreu um erro durante o login. Tente novamente mais tarde.');
        }
    }
    
    return(
        <main className="login-form-container">
            <form onSubmit={handleLogin}>
                <div>
                    <h1>Faça o Login</h1>
                    <p>Veja a lista de inscrição de todos os voluntários</p>
                </div>
                <div>
                    <label htmlFor="txtUser">Usuário:</label>
                    <input onChange={(e)=> setUsername(e.target.value)} id="txtUser" type="text" placeholder="Ex.: admin" />
                </div>
                <div>
                    <label htmlFor="txtPassword">Senha:</label>
                    <input onChange={(e)=> setPassword(e.target.value)} id="txtPassword" type="password" placeholder="Ex.: admin123" />
                </div>
                    <button type="submit">Login</button>
            </form>
        </main>
    );
}