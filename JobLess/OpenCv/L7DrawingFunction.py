import cv2
import numpy as np

width, height = 500,500
white_background = np.zeros((height,width,3),dtype= np.uint8)*255

# Draw the line on the image
cv2.line(white_background,(50,50),(300,50),(255,0,0),1)

# Draw the arrowed line on the image
cv2.arrowedLine(white_background,(50,110),(300,110),(255,60,0),1)

# Draw the rectangle on the image
cv2.rectangle(white_background,(50,150),(100,200),(255,255,0),1)  # Rectangle with border only : 1
cv2.rectangle(white_background,(110,150),(160,200),(255,255,0),-1)  # Rectangle with filled background : -1

# Draw the circle on the image
cv2.circle(white_background,(100,250),30,(0,255,242),1)  # Circle with border only : 1
cv2.circle(white_background,(170,250),30,(0,255,242),-1)  # Circle with Filed Background : -1

# Draw the ellipse on the image
cv2.ellipse(white_background, (100,300), (100,50), 0, 0, 360, (0,0,255), 1)

# Font
font = cv2.FONT_ITALIC
img = cv2.putText(white_background,"Nature Image",(50,400),font,4,(0,125,255),10,cv2.LINE_AA)


cv2.imshow("Background",white_background)
cv2.waitKey(0)
cv2.destroyAllWindow()
