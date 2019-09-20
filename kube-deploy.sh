echo '=====>delete namespace guestbook-ns'
kubectl delete namespace guestbook-ns
echo '=====>create namespace guestbook-ns'
kubectl create namespace guestbook-ns

echo '=====>delete guestbook-api-configmap'
kubectl delete configmap --namespace guestbook-ns guestbook-api-configmap
echo '=====>create guestbook-api-configmap'
kubectl create --namespace guestbook-ns -f ./helm/templates/configmap.yaml

echo '=====>delete guestbook-api-deployment<====='
kubectl delete deployment --namespace=guestbook-ns guestbook-api-deployment
rc=$(eval 'kubectl get deployment -n guestbook-ns guestbook-api-deployment')
while [ ! -z "$rc" ] 
do
	rc=$(eval 'kubectl get deployment -n guestbook-ns guestbook-api-deployment')
done
echo '=====>create guestbook-api-deployment<====='
kubectl create -f ./helm/templates/deployment.yaml

echo '=====>delete guestbook-api-svc<====='
kubectl delete svc --namespace=guestbook-ns guestbook-api-svc
rc=$(eval 'kubectl get svc -n guestbook-ns guestbook-api-svc')
while [ ! -z "$rc" ] 
do
	rc=$(eval 'kubectl get svc -n guestbook-ns guestbook-api-svc')
done
echo '=====>create guestbook-api-svc<====='
kubectl create -f ./helm/templates/svc.yaml

echo '=====>delete guestbook-api-hpa<====='
kubectl delete hpa --namespace=guestbook-ns guestbook-api-hpa
rc=$(eval 'kubectl get svc -n guestbook-ns guestbook-api-hpa')
while [ ! -z "$rc" ] 
do
	rc=$(eval 'kubectl get svc -n guestbook-ns guestbook-api-hpa')
done
echo '=====>create guestbook-api-hpa<====='
kubectl create -f ./helm/templates/hpa.yaml