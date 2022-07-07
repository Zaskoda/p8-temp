# Partavate.com

# Deployment

Deployment to Linode LKE Cluster

```
docker login
# Give your GitLab Container Registry user/access token
```

Build and push the local Docker image, replacing :latest. Optionally add a version tag.

```
docker build -t registry.gitlab.com/partavate/partavate-web/k8s-deploy:latest .
docker push registry.gitlab.com/partavate/partavate-web/k8s-deploy:latest
```

Redeploy the application on Kubernetes. This will rebuild new pods and gracefully replace the running pods.
Note, the new deployment replace the older until it's passing health checks, which should take about a minute.

```
kubectl rollout restart -n websites deployment/partavate-website
```
 
# First Time deployment / DR Rebuild

As above, but create the service first:

```
kubectl apply -f deployment/partavate-website-service.yaml
```

And register the `IngressRoute` to the Load Balancer (Traefik) last.

See instructions in the `infrastructure` repo, where this route config lives.