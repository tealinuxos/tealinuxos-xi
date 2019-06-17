# TeaLinuxOS XI Website
This site is built with <a href="https://gohugo.io">Hugo</a>. Pull requests welcome!

## Developing
Start a dev server at <code>localhost:1313</code>

## Docker
```sh
  $ docker run -d -p 1313:80 --name hugo-apps -v $(pwd)/public:/usr/local/apache2/htdocs httpd:latest
  $ docker ps
  $ curl localhost:1313
```

## Docker-compose
```sh
  $ docker-compose up -d
```
