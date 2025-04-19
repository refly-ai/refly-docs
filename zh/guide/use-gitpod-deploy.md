# gitpod 部署

访问网址 https://github.com/refly-ai/refly, 找到 Open in Gitpod 图标，点击图标。
![部署到 Gitpod](../../public/images/deploy-to-gitpod.webp)

如果是第一次，需要你用 GitHub 账号登录 gitpod， 弹出如下界面。

![gitpod new workspace](../../public/images/gitpod-new-workspace.webp)


如果你 fork 该项目，并想保存你的修改，建议你点击 `refly` 的下拉框，换成你的项目地址。

点击 `Continue`。


根据个人喜欢选择主题， 下面的 `TERMINAL` 输出有部署日志。部署的配置在 `.gitpod.yml`  文件里。
```yaml
tasks:
  - name: Deploy Services
    init: cd deploy/docker && cp ../../apps/api/.env.example .env &&   docker compose up -d
```



![gitpod deploy init](../../public/images/docker-compose-up.webp)
部署时间大概需要几分钟。

部署成功了！
![gitpod deploy success](../../public/images/gitpod-deploy-success.webp)

你可以发现 gitpod 实际提供了一个虚拟机，里面已经支持了 docker compose 部署， refly 本身支持 docker compose 部署，就无痛迁移到 gitpod。

## 升级指南
```shell
docker compose pull
docker compose down
docker compose up -d --remove-orphans
```

## 异常排除
### gipod init 失败
自己在终端手动执行 
```shell
cd deploy/docker && cp ../../apps/api/.env.example .env &&   docker compose up -d
```

### 查看容器运行情况
运行 `docker ps `
```shell
docker ps 
CONTAINER ID   IMAGE                                      COMMAND                  CREATED          STATUS                    PORTS                                            NAMES
f2d71a5494b3   reflyai/refly-api:nightly                  "docker-entrypoint.s…"   13 minutes ago   Up 12 minutes (healthy)   3000/tcp, 0.0.0.0:5800-5801->5800-5801/tcp       refly_api
1d339d1ba317   reflyai/refly-web:nightly                  "/docker-entrypoint.…"   13 minutes ago   Up 12 minutes (healthy)   0.0.0.0:5700->80/tcp                             refly_web
6ebfe46441c3   postgres:16-alpine                         "docker-entrypoint.s…"   13 minutes ago   Up 13 minutes (healthy)   0.0.0.0:5435->5432/tcp                           refly_db
563bcdcf1ff8   reflyai/qdrant:v1.13.1                     "./entrypoint.sh"        13 minutes ago   Up 13 minutes (healthy)   0.0.0.0:6333-6334->6333-6334/tcp                 refly_qdrant
47a3d82c8f16   reflyai/elasticsearch:7.10.2               "/tini -- /usr/local…"   13 minutes ago   Up 13 minutes (healthy)   9300/tcp, 0.0.0.0:9210->9200/tcp                 refly_elasticsearch
ca56521eebd6   redis/redis-stack:latest                   "/entrypoint.sh"         13 minutes ago   Up 13 minutes (healthy)   0.0.0.0:8001->8001/tcp, 0.0.0.0:6381->6379/tcp   refly_redis
4b0b9d2100d0   minio/minio:RELEASE.2025-01-20T14-49-07Z   "/usr/bin/docker-ent…"   13 minutes ago   Up 13 minutes (healthy)   0.0.0.0:9002->9000/tcp, 0.0.0.0:9003->9001/tcp   refly_minio
```

或者运行 `docker status`, `Ctrl + C` 可以退出
```shell
docker stats
CONTAINER ID   NAME                  CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O         PIDS
f2d71a5494b3   refly_api             0.04%     160.9MiB / 62.79GiB   0.25%     1.5MB / 3.37MB    3.5MB / 229kB     32
1d339d1ba317   refly_web             0.00%     13.49MiB / 62.79GiB   0.02%     301kB / 3.41MB    8.19kB / 8.19kB   17
6ebfe46441c3   refly_db              0.00%     37.39MiB / 62.79GiB   0.06%     47.5kB / 14.4kB   0B / 113MB        7
563bcdcf1ff8   refly_qdrant          0.20%     82.04MiB / 62.79GiB   0.13%     9.04kB / 4.61kB   0B / 4.91MB       75
47a3d82c8f16   refly_elasticsearch   0.17%     1.416GiB / 62.79GiB   2.26%     115kB / 112kB     0B / 7.63MB       80
ca56521eebd6   refly_redis           0.26%     133.8MiB / 62.79GiB   0.21%     3.55MB / 1.38MB   7.49MB / 2.65MB   21
4b0b9d2100d0   refly_minio           0.06%     91.88MiB / 62.79GiB   0.14%     14.1kB / 7.32kB   0B / 3.56MB       21
```

运行日志查看，运行 `docker compose logs -f`， `Ctrl + C` 可以退出。 

查看具体的服务的日志，例如 `api`, `docker compose logs api -f`, 从docker compose 文件的 service 的命名确定，不要跟 Docker 的容器名混淆。




