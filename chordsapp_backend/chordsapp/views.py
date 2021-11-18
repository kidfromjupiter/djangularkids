from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import SongSerializer
from .models import Song
from django.http import JsonResponse
# Create your views here.

def home(request):
    return render(request, 'home.html')

class SongView(TemplateView):
    def get(self, request):
        songlist = Song.objects.all()
        serialize = SongSerializer(songlist, many=True)
        return JsonResponse(serialize.data, safe=False)