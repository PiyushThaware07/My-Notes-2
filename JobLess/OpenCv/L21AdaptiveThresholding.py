'''
Adaptive Thresholding : 
Adaptive thresholding is a computer vision and image processing technique used to separate the foreground (objects of interest) from the background in an image. 
'''

import cv2
import numpy as np

img = cv2.imread("./background1.jpg",0)
img = cv2.resize(img,(400,400))
_,th1 = cv2.threshold(img,50,255,cv2.THRESH_BINARY)
th2 = cv2.adaptiveThreshold(img, 255, cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY, 11, 2)
th3 = cv2.adaptiveThreshold(img, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 11, 2)


cv2.imshow("Original Image",img)
cv2.imshow("Simple Threshold",th1)
cv2.imshow("Adaptive Threshold",th2)
cv2.imshow("Adaptive Threshold Gaussian",th3)

cv2.waitKey(0)
cv2.destroyAllWindows()

