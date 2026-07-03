from django.http import JsonResponse

def health(request):
   return JsonResponse({
       "status": "ok",
       "message": "API Cuidar el Alma funcionando"
   })
