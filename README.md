# 🏥 Médicos & Dentistas

Projeto frontend desenvolvido com **React + TypeScript + Vite**, simulando uma landing page institucional voltada para a divulgação de um projeto social de **atendimento médico e odontológico gratuito**, além de incentivar o voluntariado.

O projeto foi construído com foco em **boas práticas de frontend**, **componentização**, **roteamento SPA** e **experiência do usuário**.

---

## 🔗 Demonstração

> Projeto frontend estático (SPA). Pode ser executado localmente seguindo as instruções abaixo.

---

## ✨ Funcionalidades

* 📄 **Landing Page institucional**
* 🧭 **Navegação SPA com React Router DOM**
* 🧩 **Componentes reutilizáveis** (Header, Footer, Cards)
* 📌 **Header fixo (sticky)** com navegação por *anchor links*
* 🔀 **Header dinâmico**, que se adapta conforme a rota ativa
* 🔗 **Anchor links** com ajuste para header fixo
* 📱 Layout responsivo (desktop-first)
* 🎨 Estilização com **SASS (SCSS)**

---

## 🗺️ Estrutura de Rotas

```txt
/                → Página inicial (Home)
/be-a-volunteer  → Página Seja um Voluntário
```

Implementadas com **React Router DOM v6**.

---

## 🧱 Estrutura do Projeto

```txt
src/
 ├─ components/
 │  ├─ Header/
 │  └─ Footer/
 ├─ pages/
 │  ├─ Home/
 │  └─ BeAVolunteer/
 ├─ App.tsx
 ├─ main.tsx
 └─ styles/
```

---

## 🛠️ Tecnologias Utilizadas

* **React 18**
* **TypeScript**
* **Vite**
* **React Router DOM v6**
* **SASS (SCSS)**
* **ESLint**

---

## 🎯 Destaques Técnicos

### 🔹 Header Inteligente

O Header se adapta automaticamente de acordo com a rota atual:

* Na Home: exibe navegação por seções (anchor links)
* Em outras páginas: exibe link para retornar à Home

Essa lógica é baseada na rota atual usando `useLocation`, evitando estados manuais desnecessários.

---

### 🔹 Navegação por Anchor Links

As seções da Home utilizam *anchor links* (`#id`) com correção para header fixo usando:

```scss
scroll-margin-top
```

Isso garante que o conteúdo não fique oculto atrás do header ao navegar.

---

### 🔹 Componentização

* Cards de serviços e departamentos são renderizados dinamicamente a partir de arrays
* Estrutura preparada para fácil escalabilidade

---

## ▶️ Como Executar o Projeto

### 📦 Pré-requisitos

* **Node.js** (versão 18 ou superior)
* **npm** ou **yarn**

---

### 🚀 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/medicosdentistas.git
```

2. Acesse a pasta do projeto:

```bash
cd medicosdentistas
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o projeto em modo desenvolvimento:

```bash
npm run dev
```

5. Acesse no navegador:

```txt
http://localhost:5173
```

---

## 🏗️ Build para Produção

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

---

## 📌 Observações

* Projeto **frontend apenas** (sem backend)
* Conteúdo fictício com fins educacionais
* Estrutura preparada para futura integração com APIs

---

## 👤 Autor

**Fábio Marques**

* Projeto desenvolvido para fins de estudo e avaliação técnica
* 2025 © Todos os direitos reservados

---

## 📄 Licença

Este projeto é público e pode ser utilizado para fins educacionais.
