###### Mouse Callback functions
'''
import cv2 
import numpy as np
def draw(event,x,y,flags,param):
    print("X ==> ",x)
    print("Y ==> ",y)
    print("Flags ==> ",flags)
    print("Param ==> ",param)
    if event == cv2.EVENT_LBUTTONDBLCLK:  # left button double click
        cv2.circle(img, (x, y), 100, (214, 255, 0), 1)
    if event == cv2.EVENT_RBUTTONDBLCLK:  # right button double click
        cv2.rectangle(img, (x, y), (x + 150, y + 150), (125, 125, 255), 2)
cv2.namedWindow(winname="myWindow")
# Creating a blank image
img = np.zeros((512,512,3),np.uint8)
cv2.setMouseCallback("myWindow",draw)

while True:
    cv2.imshow("myWindow",img)
    close = cv2.waitKey(1) & 0xFF
    if close == ord("c"):
        break
cv2.destroyAllWindows()
''' 


################# Question
# Create a function which help to find the coordinate of any pixel and its color on left and right double click

import cv2 
import numpy as np
def mouse_event(event,x,y,flags,param):
    print("Event ==> ",event)
    print("X ==> ",x)
    print("Y ==> ",y)
    print("Flags ==> ",flags)
    print("Param ==> ",param)
    font = cv2.FONT_HERSHEY_PLAIN
    # Left Double Click get coordinate
    if event == cv2.EVENT_LBUTTONDBLCLK:
        print(f"X-Coordinate : {x}\nY-Coordinate : {y}")
        cord = ". "+str(x)+", "+str(y)
        cv2.putText(img,cord,(x,y),font,1,(155,125,100),2)
        # cv2.imshow("myWindow",img)

    # Right Double click get color 
    if event == cv2.EVENT_RBUTTONDBLCLK:
        b = img[y,x,0] #for blue channel is 0
        g = img[y,x,1] #for green channel is 1
        r = img[y,x,2] #for red channel is 2 
        color_bgr = " . "+str(b)+" , "+str(g)+" , "+str(r)
        cv2.putText(img,color_bgr,(x,y),font,1,(152,255,130),2)
        # cv2.imshow("myWindow",img)


cv2.namedWindow(winname="myWindow")
# Creating a blank image
# img = np.zeros((512,512,3),np.uint8)
img = cv2.imread("./background.jpg")
img = cv2.resize(img,(500,500))
cv2.setMouseCallback("myWindow",mouse_event)
while True:
    cv2.imshow("myWindow",img)
    close = cv2.waitKey(1) & 0xFF
    if close == ord("c"):
        break
cv2.destroyAllWindows()
