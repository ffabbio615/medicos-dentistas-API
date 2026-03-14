# 🦷 Médicos e Dentistas — Versão API

Projeto full stack composto por uma **API REST** e uma **interface web** para gerenciamento de voluntários de uma organização fictícia de médicos e dentistas.

A aplicação permite:

* cadastrar voluntários
* listar voluntários
* atualizar informações
* remover voluntários

O objetivo do projeto é praticar a criação de APIs com  **Node.js e Express** , além da integração com **React + TypeScript** no frontend.

---

# 🌐 Deploy da aplicação

Frontend (Vercel)
[https://medicos-dentistas-api.vercel.app/](https://medicos-dentistas-api.vercel.app/)

API (Render)
[https://medicos-dentistas-api.onrender.com](https://medicos-dentistas-api.onrender.com/)

---

# ✨ Funcionalidades

* 📄 **Landing Page institucional**
* 🧭 **Navegação SPA com React Router DOM**
* 🧩 **Componentes reutilizáveis** (Header, Footer, Cards)
* 📌 **Header fixo (sticky)** com navegação por *anchor links*
* 🔀 **Header dinâmico**, que se adapta conforme a rota ativa
* 🔗 **Anchor links** com ajuste para header fixo
* 📱 Layout responsivo (desktop-first)
* 🎨 Estilização com **SASS (SCSS)**
* **📄 Crud com Banco de Dados fake, utilizando API e Middlewares**

---

# ⚠️ Avisos importantes

### API em produção

O frontend publicado na Vercel está configurado para consumir a API hospedada no Render.

Se você quiser rodar o projeto  **localmente** , será necessário alterar as URLs das requisições para:

```
http://localhost:3000
```

Isso deve ser feito nos arquivos responsáveis pelas chamadas da API no frontend.

---

### Tempo de expiração do token

O sistema utiliza autenticação por  **JWT** .

O token gerado no login tem duração de  **5 minutos** .
Após esse tempo, será necessário realizar login novamente.

Esse tempo curto foi configurado propositalmente para fins de demonstração e testes.

---

# 🚀 Tecnologias utilizadas

Backend

* Node.js
* Express
* JavaScript (ES Modules)

Frontend

* React
* TypeScript
* Vite
* React Router

Infraestrutura

* Render (deploy da API)
* Vercel (deploy do frontend)

---

# 📂 Estrutura do projeto

```
medicos-dentistas-API
│
├── backend
│   ├── controllers
│   ├── middlewares
│   ├── routes
│   ├── services
│   ├── database
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── types
│   └── index.html
```

O projeto une as pastas de front-end e back-end para fins acadêmicos e utiliza separação em camadas:

* **Routes** → definição dos endpoints
* **Middlewares** → validações e autenticação
* **Controllers** → tratamento das requisições
* **Services** → manipulação dos dados

---

# 📡 Endpoints da API

Base URL

```
https://medicos-dentistas-api.onrender.com
```

### Listar voluntários

```
GET /volunteers
```

---

### Criar voluntário

```
POST /volunteers
```

Body:

```json
{
  "name": "João Silva",
  "tel": "21999999999",
  "email": "joao@email.com",
  "message": "Quero participar como voluntário"
}
```

---

### Atualizar voluntário

```
PUT /volunteers/:id
```

---

### Deletar voluntário

```
DELETE /volunteers/:id
```

---

# 💻 Como rodar o projeto localmente

Clone o repositório:

```
git clone https://github.com/ffabbio615/medicos-dentistas-API
```

Entre na pasta do projeto:

```
cd medicos-dentistas-API
```

---

# Backend

```
cd backend
npm install
npm run dev
```

Servidor rodará em:

```
http://localhost:3000
```

---

# Frontend

Antes de rodar o frontend localmente, altere as URLs das requisições para:

```
http://localhost:3000
```

Depois execute:

```
cd frontend
npm install
npm run dev
```

Aplicação disponível em:

```
http://localhost:5173
```

---

# 🎯 Objetivo do projeto

Este projeto foi criado para praticar:

* desenvolvimento de **APIs REST**
* organização de projetos **Node.js**
* integração com **React**
* uso de **TypeScript**
* autenticação com **JWT**
* deploy em nuvem

---

# 📌 Status do projeto

Projeto funcional para fins educacionais.

Possíveis melhorias futuras:

* banco de dados real (PostgreSQL ou MongoDB)
* autenticação mais robusta
* refresh token
* paginação de resultados
* testes automatizados

---


## 👤 Autor

**Fábio Marques**

* Projeto desenvolvido para fins de estudo e avaliação técnica
* 2026 © Todos os direitos reservados

---

## 📄 Licença

Este projeto é público e pode ser utilizado para fins educacionais.
