import asyncio
from channels.consumer import SyncConsumer
from channels.consumer import AsyncConsumer
from channels.exceptions import StopConsumer

''' =========================================================
Sync Consumer 
========================================================= '''
import json
from time import sleep


class MySyncConsumer(SyncConsumer):

    def websocket_connect(self, event):
        print("Websocket Connected...", event)
        #  following code will sends a message back to the client using self.send. The message is a dictionary with a single key-value pair.
        self.send({
            'type': 'websocket.accept',
        })

    ''' 
    def websocket_receive(self, event):
        print("Websocket Receive...", event)
        # client sending data to server
        print(f"Message Received from client is : {event['text']}")
        # Server sending data to client
        for number in range(10):
            self.send({
                "type": "websocket.send",
                # "text": number,  ---> this will give error as int object has no attribute encode so you need to convert it to the string like as below.
                "text": f'Server to Client : {str(number)}',

            })
            sleep(1)
    '''

    def websocket_receive(self, event):
        print("Websocket Receive...", event)
        # client sending data to server
        print(f"Message Received from client is : {event['text']}")
        # Server sending data to client
        for number in range(10):
            self.send({
                "type": "websocket.send",
                # "text": number,  ---> this will give error as int object has no attribute encode so you need to convert it to the string like as below.
                "text": json.dumps({"count": number}),  # python dictionary to string 

            })
            sleep(1)

    def websocket_disconnect(self, event):
        print("Websocket Disconnect...", event)
        raise StopConsumer()


''' =========================================================
Async Consumer 
========================================================= '''


class MyAsyncConsumer(AsyncConsumer):

    async def websocket_connect(self, event):
        print("Websocket Connected...", event)
        #  following code will sends a message back to the client using self.send. The message is a dictionary with a single key-value pair.
        await self.send({
            'type': 'websocket.accept',
        })

    async def websocket_receive(self, event):
        print("Websocket Receive...", event)
        # client sending data to server
        print(f"Message Received from client is : {event['text']}")
        # Server sending data to client
        for number in range(10):
            await self.send({
                "type": "websocket.send",
                # "text": number,  ---> this will give error as int object has no attribute encode so you need to convert it to the string like as below.
                "text": f'Server to Client : {str(number)}',

            })
            await asyncio.sleep(1)

    async def websocket_disconnect(self, event):
        print("Websocket Disconnect...", event)
        raise StopConsumer()
