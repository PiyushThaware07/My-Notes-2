import cv2 
import numpy as np


capture = cv2.VideoCapture('./sample.mp4')

def nothing(x):
    pass 

# create nameWindow
cv2.namedWindow("Color Adjustments")

# Trackbar cretions
cv2.createTrackbar("Lower_H","Color Adjustments",0,255,nothing)
cv2.createTrackbar("Lower_S","Color Adjustments",0,255,nothing)
cv2.createTrackbar("Lower_V","Color Adjustments",0,255,nothing)

cv2.createTrackbar("Upper_H","Color Adjustments",255,255,nothing)
cv2.createTrackbar("Upper_S","Color Adjustments",255,255,nothing)
cv2.createTrackbar("Upper_V","Color Adjustments",255,255,nothing)

while True:
    boolValue,frame = capture.read()
    frame  = cv2.resize(frame,(500,500))


    hsv = cv2.cvtColor(frame,cv2.COLOR_BGR2HSV)

    # Connecting Trackbar
    l_h = cv2.getTrackbarPos("Lower_H","Color Adjustments")
    l_s = cv2.getTrackbarPos("Lower_S","Color Adjustments")
    l_v = cv2.getTrackbarPos("Lower_V","Color Adjustments")

    u_h = cv2.getTrackbarPos("Upper_H","Color Adjustments")
    u_s = cv2.getTrackbarPos("Upper_S","Color Adjustments")
    u_v = cv2.getTrackbarPos("Upper_V","Color Adjustments")

    lower_bound = np.array([l_h,l_s,l_v])
    upper_bound = np.array([u_h,u_s,u_v])

    # marking
    mask = cv2.inRange(hsv,lower_bound,upper_bound)

    # filter mask with image
    result = cv2.bitwise_and(frame,frame,mask=mask)

    # outputs
    cv2.imshow("Original Image",frame)
    cv2.imshow("Mask",mask)
    cv2.imshow("Result",result)



    close = cv2.waitKey(10)
    if close == ord("c"):
        break
capture.release()
cv2.destroyAllWindows()
