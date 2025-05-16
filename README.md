# Next.js + JSON Server + React Query Demo

Este experimento testa o uso da ide Cursor com Nextjs (typescript + TailwindCSS).

Demonstra a integração entre React Query e JSON Server apresentando uma abordagem moderna para gerenciamento de estado do servidor em aplicações React.

## 🚀 Stack Tecnológica

- [Next.js](https://nextjs.org/) - Framework React com suporte a TypeScript
- [JSON Server](https://github.com/typicode/json-server) - API REST fake completa
- [React Query](https://tanstack.com/query/latest) - Sincronização de dados poderosa para React
- [TypeScript](https://www.typescriptlang.org/) - Verificação estática de tipos
- [pnpm](https://pnpm.io/) - Gerenciador de pacotes rápido e eficiente em espaço em disco
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS utilitário
- [GraphQL](https://graphql.org/) - Linguagem de consulta para APIs

## 🎯 Propósito

Este projeto serve como demonstração e ambiente de teste para:

- Configuração de um projeto Next.js com TypeScript
- Implementação do JSON Server como backend mock
- Uso do React Query para gerenciamento eficiente do estado do servidor
- Fluxo de desenvolvimento no Cursor IDE
- Integração com GraphQL
- Boas práticas de desenvolvimento com ESLint e Prettier

## 🛠️ Começando

1. Clone o repositório

```bash
git clone git@github.com:jonat-m/cursor-nextjs-jsonserver-reactquery-demo.git
cd cursor-nextjs-jsonserver-reactquery-demo
```

2. Instale as dependências

```bash
pnpm install
```

3. Inicie o servidor de desenvolvimento

```bash
# O comando abaixo inicia todos os servidores necessários
pnpm dev
```

4. Acesse as diferentes portas:
   - [http://localhost:3000](http://localhost:3000) - Aplicação Next.js
   - [http://localhost:3001](http://localhost:3001) - JSON Server (REST API)
   - [http://localhost:3002](http://localhost:3002) - GraphQL Server

## 📁 Estrutura do Projeto

```
├── src/
│   ├── components/     # Componentes React
│   ├── pages/         # Páginas Next.js
│   └── types/         # Definições de tipos TypeScript
├── json-server/       # Arquivos do JSON Server
│   └── db.json        # Arquivo de banco de dados
├── public/           # Arquivos estáticos
└── ...
```

## 🛠️ Scripts Disponíveis

- `pnpm dev` - Inicia todos os servidores de desenvolvimento
- `pnpm build` - Cria a build de produção
- `pnpm start` - Inicia o servidor de produção
- `pnpm lint` - Executa o linter
- `pnpm lint:fix` - Corrige problemas de linting
- `pnpm format` - Formata o código com Prettier
- `pnpm json-server` - Inicia apenas o JSON Server
- `pnpm json-graphql-server` - Inicia apenas o servidor GraphQL

## 🔧 Ferramentas de Desenvolvimento

- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **TailwindCSS** - Estilização
- **TypeScript** - Tipagem estática
- **EditorConfig** - Configurações consistentes de editor

## 📜 Licença

Este projeto está licenciado sob uma licença personalizada não comercial.
Uso comercial não é permitido. Veja LICENSE para detalhes.
