from django.urls import path
from . import CONSUMERS

websocket_urlpatterns = [
    path('ws/sc/', CONSUMERS.MySyncConsumer.as_asgi()),
    path('ws/ac/', CONSUMERS.MyAsyncConsumer.as_asgi()),
]
