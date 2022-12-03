# WeMovies

Neste projeto teste da WeFit Digital Service Design foi solicitado que fosse desenvolvido um layout referente ao que representa um e-comerce de filmes. Nesta funcinalidade o projeto conta com funcionamento de classes dinâmicas para estilização e filmes renderizados através do consumo de uma FAKE API onde foi fornecid o arquivo .json e simulado utilizando json-server. 

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

```
Clonando o projeto do github:

Para baixar o projeto e funcionar de forma correta, é necessário que faça o clone do mesmo na sua máquina através do comando abaixo: 

git clone https://github.com/vtrajanodev/webmovie.git

```


### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

```
 * Node instalado em sua máquina
 * NPM ou Yarn para gerenciamento.

```

### 🔧 Instalação

```
Para instalar e rodar o projeto é necessário que sejam instaladas as dependências, para isso execute o seguinte comando:

* Usando NPM:

npm install
npm start

*Usando yarn

yarn
yarn start


Após as depêndencias serem instaladas, é necessário inicializar o servidor apontando para o arquivo movies.json que servirá como a FAKE API e será consumida no projeto, para isso, utilze a biblioteca json-server.:

instalação do json-server: npm install -g json-server

Após instalado execute o comando para inicializar o servidor: json-server --watch movies.json

```

## 🛠️ Construído com

Ferramentas utilizadas para desenvolvimento do projeto.

* [Vite] - ferramenta de construção do projeto frontend. Responsável pela criação das primeiras estruturas de pastas do projeto e build do mesmo. O vite conta com uma velocidade de até 100x mais rápida em build devido a tecnologia dos seus bundlers.
* [npm] - Utilizado para gerenciar dependências na instalação e execução de novos pacotes e execução do projeto como gerente de dependências
* [react-router-dom] - Utilizado para gerenciar todo sistema de rotas do front end, utilizando conceito de rotas encadeadas, default layout através do componente outlet em páginas que se repetem, além de redirecionar URL's que trariam um erro 404 para o componente Home.
* [Styled-components] - Biblioteca que possibilita escrever códigos CSS dentro do JavaScript ganhando mais agilidade e precisão no desenvolvimento web, facilitando criação de temas, definição de cores padrão entre outros benefícios.
* [Axios] - Cliente HTTP baseado em Promises para fazer requisições a API fornecida.
* [Typescript] - Superset javascript potencializando a linguagem através de uma forte tipagem que permite maior desempenho e produtividade na hora de executar uma aplicação.

## ✒️ Autores


* **Victor Trajano** - *Trabalho Completo* - [vtrajanodev](https://github.com/vtrajanodev)

## Details 🤓

* Boas práticas de programação utilizando as melhores atualizações do react 2022 como utilização do Vite e react-router-dom em suas versões mais atuais.

* Performance máxima do react atingida com react hooks, programação funcional.

* Utilização do context API mantendo as "regras de negócio" em um arquivo separado dos componentes apenas chamando os valores necessários, tirando a sobrecarga e perca de performance na ré-redenrização do componente. UI isolada da lógica.

* Rotas protegidas de forma que o usuário não consegue cair em uma rota a partir do domínio utilizado e se deparar com um erro 404 - not found. Caso o usuário acesse uma rota não existente o mesmo é redirecionado para home automáticamente. 

* Utilização do Styled components

* Separação de arquivos de componentes, páginas e estilos para fácil manuntenção do código.

* Utilização de @keyframes para animação no SCSS em utilização no componente de loading.

## 🎁 Expressão de gratidão

* Agradecimentos aos gestores da WeFit Digital Service Design e em especial a Pétala a qual me fez o contato referente a vaga de frontend e fez o encaminhamento do teste me tirando todas as dúvidas de forma simples e objetiva. 


---
Desenvolvido com ❤️ por Victor Trajano
