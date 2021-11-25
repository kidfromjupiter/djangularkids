"""chordsapp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
import chordsapp.views as chordsapp_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', chordsapp_views.home, name='home'),
    path('songs/', chordsapp_views.SongView.as_view(), name='songs_list'),
    path('songs/d/<uuid:song>/', chordsapp_views.DelSongView.as_view(), name='del_song'),
    path('songs/add/', chordsapp_views.AddSongView, name='add_song'),
]
