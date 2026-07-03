from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/accounts/', include('accounts.urls')),
    path('api/library/', include('library.urls')),
    path('api/sundays/', include('sundays.urls')),
    path('api/qr/', include('qr.urls')),
    path('api/resources/', include('resources.urls')),
    path('api/premium/', include('premium.urls')),
]
