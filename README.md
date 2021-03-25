# Boilerplate para temas Tray e-commerce

Um boilerplate para facilitar a instalação do ambiente de desenvolvimento de temas para Tray e-commerce.

## Primeiros passos

Tenha instalado o [Docker](https://www.docker.com/) e [Docker compose](https://docs.docker.com/compose/) em sua máquina.

### Docker
- [Windows](https://docs.docker.com/docker-for-windows/install/)
- [Linux](https://docs.docker.com/engine/install/debian/)
- [macOs](https://docs.docker.com/docker-for-mac/install/)

### Docker compose

O Docker Desktop já inclui o Docker compose nas plataformas mac e windows.

- [Linux](https://docs.docker.com/compose/install/#linux)

### Variáveis de ambiente

Renomeie o arquivo .env.example para apenas .env e adicione o API_KEY, PASSWORD E THEME_ID referente à loja Tray na qual se refere o projeto do tema.

```shell
# O arquivo ficará parecido com esse exemplo

API_KEY=d614da37e97d9e5b3bc1ce35024a0ce6
PASSWORD=3941f8ccdba855061a8f6a2d9de17cc8
THEME_ID=1308
```

### Iniciar container

Para iniciar o container, vá para pasta raíz do projeto no terminal e execute o comando:

```shell
docker-compose up

# Ou se quiser manter os logs executando em background utilize:
docker-compose up -d
```

Com isso o docker irá baixar o tema dentro da pasta **/dist** e ficará observando as mudanças realizadas nos arquivos.  

Caso queira executar outros comandos do opencode, deve entrar no container com o seguinte comando:

```shell
docker exec it ID_DO_CONTAINER /bin/sh
```

Para consultar os comandos disponíveis, execute dentro do container: `opencode -h`