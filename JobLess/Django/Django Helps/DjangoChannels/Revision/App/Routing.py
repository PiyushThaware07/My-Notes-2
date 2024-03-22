from django.urls import path
# Consumers
from . import Consumer

websocket_urlpatterns = [
    path('ws/sc/', Consumer.MySyncConsumer.as_asgi()),
    path('ws/ac/', Consumer.MyAsyncConsumer.as_asgi()),
]
