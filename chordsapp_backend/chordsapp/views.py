from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import SongSerializer
from .models import Song
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.

def home(request):
    return render(request, 'home.html')


def getSongList():
    songlist = Song.objects.all()
    serialize = SongSerializer(songlist, many=True)
    return serialize.data


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
            songlist = getSongList()
            return JsonResponse(songlist, safe=False)
            
        except Song.DoesNotExist:
            return JsonResponse({'status': 'Error. Requested song does not exist.'})



@csrf_exempt
def AddSongView(request):
    if request.method == 'POST':
        try:
            print(request.POST)
            title = request.POST['title']
            lyrics = request.POST['lyrics']
            artist = request.POST['artist']
    
            if title and lyrics and artist:
                song = Song(title=title, lyrics=lyrics, artist=artist)
                song.save()
                songlist = getSongList()
                return JsonResponse(songlist, safe=False)
        except:
            return JsonResponse({'status': 'Error. Something when wrong. Try again later'})
