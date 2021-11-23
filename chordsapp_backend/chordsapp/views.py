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

class DelSongView(TemplateView):
    def get(self, request,*args, **kwargs):
        try:
            song = Song.objects.get(id=kwargs['song'])
            song.delete()
            songlist = Song.objects.all()
            serialize = SongSerializer(songlist, many=True)
            serialize = serialize.update({'status': 'success'})
            return JsonResponse(serialize.data, safe=False)
        except Song.DoesNotExist:
            return JsonResponse({'status': 'Error. Requested song does not exist.'})