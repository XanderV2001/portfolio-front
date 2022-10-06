# Personal portfolio website

## The general stuff

This project contains the source code to my portfolio website which you can visit [here](https://xandervos.dev).  
In this project I will be testing new technologies and honing existing technologies.

The tech stack for this current project is as follows.

- [Vue 3](https://vuejs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [NaiveUI](https://www.naiveui.com/en-US/os-theme)

In addition to these frontend frameworks I am using [Appwrite](https://appwrite.io/) as the backend.

## Hosting

Both the frotend vue project and [Appwrite](https://appwrite.io/) are self hosted.

To host this application I am using [docker](https://www.docker.com/) images. These images are stored on [Github's container registry](https://github.com/features/packages), the images can be found [here](https://github.com/XanderV2001/portfolio-front/pkgs/container/portfolio-front).

To host this project yourself you can spin up your own docker image.

```
docker run -p 8080:80 --rm --name xander-portfolio -d ghcr.io/xanderv2001/portfolio-front:latest
```

You could also run this with [docker compose](https://docs.docker.com/compose/).

```
version: "3"

services:
  portfolio:
    image: ghcr.io/xanderv2001/portfolio-front:latest
    ports:
      - 8080:80
    container_name: portfolio

```

>Keep in mind that you won't be able to connect to the backend when you access the container with anything other than **localhost** or **xandervos.dev**

To update my site, I create a new tag in Github, a CI/CD pipeline will automatically publish a new latest version of the portfolio on the container registry. The new version will automatically update on my server by use of [Docker Watchtower](https://containrrr.dev/watchtower/) which checks for new builds of the images.
