# Partavate.com

# Deployment

Deployment to Linode LKE Cluster

```
docker login
# Give your GitLab Container Registry user/access token
```

```
docker build -t registry.gitlab.com/partavate/partavate-web/k8s-deploy:0.1 -t  registry.gitlab.com/partavate/partavate-web/k8s-deploy:latest .
```
```
docker push
```

Update the Kubernetes deployment.yaml, changing the image version:

Edit `deployment/partavate-website-deployment.yaml`

Set `registry.gitlab.com/partavate/partavate-web/k8s-deploy:0.4` to the new image tag just pushed.

Redeploy the application on Kubernetes. This will rebuild new pods and gracefully replace the running pods.

```
kubectl apply -f deployment/partavate-website-deployment.yaml
```
 
# First Time deployment / DR Rebuild

As above, but create the service first:

```
kubectl apply -f deployment/partavate-website-service.yaml
```

And register the `IngressRoute` to the Load Balancer (Traefik) last.

See instructions in the `infrastructure` repo, where this route config lives.