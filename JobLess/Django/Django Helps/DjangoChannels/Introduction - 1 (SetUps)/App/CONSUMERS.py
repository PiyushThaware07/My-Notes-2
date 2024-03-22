# ===============================================================
# Sync Consumer
# ===============================================================
from channels.consumer import SyncConsumer
from channels.exceptions import StopConsumer

class MySyncConsumer(SyncConsumer):
    # This handler is called when client initially opens the connection and is about to finish the websocket.
    def websocket_connect(self, event):
        print('Websocket Connected...',event)
        self.send({
            'type':'websocket.accept'
        })

    # This handler is called when data is received from client
    def websocket_receive(self, event):
        print('Message Received Successfully...',event)
        print('Message Received is : ',event['text'])
        self.send({
            'type':'websocket.send',
            'text': 'Message Sent to client',
        })


    # This handler is called when either connection from client site or server site is closing
    def websocket_disconnect(self, event):
        print('Websocket Disconnected...',event)
        raise StopConsumer()









# ===============================================================
# Async Consumer
# ===============================================================
from channels.consumer import AsyncConsumer

class MyAsyncConsumer(AsyncConsumer):
    # This handler is called when client initially opens the connection and is about to finish the websocket.
    async def websocket_connect(self, event):
        print('Websocket Connected...')
        await self.send({
            'type':'websocket.accept',
        })

    # This handler is called when data is received from client
    async def websocket_receive(self, event):
        print('Message Received Successfully...')
        print('Message Received is : ',event['text'])

    # This handler is called when either connection from client site or server site is closing
    async def websocket_disconnect(self, event):
        print('Websocket Disconnected...')
        raise StopConsumer()