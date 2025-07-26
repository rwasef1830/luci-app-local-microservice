## luci-app-local-microservice

After installing, edit `/etc/config/local_microservice`

```
config local_microservice 'settings'
    option url 'http://192.168.8.1:8081'
```

Change the url to a local microservice that returns a HTML fragment that will be rendered at the bottom of the status overview dashboard.
Note: If a complete HTML document is returned, all non-body tags will be stripped out.
