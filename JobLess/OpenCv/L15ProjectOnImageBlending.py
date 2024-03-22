import cv2
import numpy as np 
img1 = cv2.imread("./background.jpg")
img1 = cv2.resize(img1,(300,400))
img2 = cv2.imread("./background1.jpg")
img2 = cv2.resize(img2,(300,400))


# create window
cv2.namedWindow(winname="myWindow")

# create trackbar
def nothing(x):
    pass

cv2.createTrackbar("visibility","myWindow",0,100,nothing)

while True:

    # get trackbar
    visibility = cv2.getTrackbarPos("visibility","myWindow")
    alpha = float(visibility/100)
    disolveBothImages = cv2.addWeighted(img1,1-alpha,img2,alpha,0)

    # add text
    font = cv2.FONT_HERSHEY_SIMPLEX
    textData = f"{visibility} %"
    passData = cv2.putText(disolveBothImages,textData,(25,25),font,0.6,(0,0,255),2)

    cv2.imshow("myWindow",disolveBothImages)



    close = cv2.waitKey(20)
    if close == ord("c"):
        break 

cv2.destroyAllWindows()