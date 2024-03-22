import os

from django.core.asgi import get_asgi_application
# Imports
from channels.routing import ProtocolTypeRouter, URLRouter
import App.ROUTING

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Project.settings')

application = ProtocolTypeRouter({
    'http': get_asgi_application(),
    'websocket': URLRouter(
        App.ROUTING.websocket_urlpatterns
    )
})
