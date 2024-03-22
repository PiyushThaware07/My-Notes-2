from django.urls import path
from . import Consumers

websocket_urlpatterns = [
    path('ws/sc/', Consumers.MySyncConsumer.as_asgi()),
    path('ws/ac/', Consumers.MyAsyncConsumer.as_asgi()),
]
