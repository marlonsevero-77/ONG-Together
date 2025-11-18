# ONG Together

ONG Together é uma plataforma web SPA (Single Page Application) desenvolvida para conectar voluntários e doadores a projetos sociais. O projeto foi criado com foco em acessibilidade, modularidade e integração futura com sistemas.

## 🚀 Funcionalidades

- SPA com roteamento via hash (`#/`)
- Formulário de cadastro com validação nativa e máscaras para CPF, telefone e CEP
- Modal de confirmação de envio com acessibilidade
- Menu responsivo para desktop e mobile
- Componentização por página (`home.js`, `projetos.js`, `cadastro.js`)
- Scripts organizados por função (`main.js`, `scripts.js`, `router.js`)

## 🧱 Estrutura de Arquivos

## 📦 Tecnologias Utilizadas

- HTML5, CSS3, JavaScript
- SPA com roteamento baseado em hash
- Validação nativa do navegador
- Modularização por componentes
- Máscaras manuais com RegEx

## 🧪 Como testar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/ong-together.git
   cd ong-together
- Abra o index.html diretamente no navegador ou use uma extensão como Live Server.
- Navegue pelas rotas:
- #/ → Página inicial
- #/projetos → Projetos sociais
- #/cadastro → Formulário de cadastro
🛠️ Scripts principais- scripts.js: máscaras, validação e modal
- main.js: controle de menu mobile
- router.js: roteamento SPA e reativação de scripts
📋 Modal de sucessoO modal é exibido após o envio válido do formulário e pode ser fechado com o botão "Fechar". A lógica está centralizada em scripts.js e ativada via initPageScripts() após cada navegação SPA.📌 Observações- O projeto está preparado para integração com outros apps e frameworks.
- A estrutura modular facilita futuras expansões e integrações.
📄 LicençaEste projeto está sob a licença MIT. Sinta-se livre para usar, modificar e contribuir.
---
