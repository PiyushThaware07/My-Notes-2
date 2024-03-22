'''
Thresholding : 
Thresholding in simple words is a basic image processing technique used to separate or highlight specific parts of an image based on their brightness or color. It's like drawing a line or boundary between what you want to keep and what you want to discard in an image.

If you want to perform thresholding on the image to segment specific regions or objects based on their pixel intensity values, you can use OpenCV's thresholding functions. 

3 types :
* simple
* adaptive
* excive

ret, thresholded = cv2.threshold(gray, threshold_value, 255, cv2.THRESH_BINARY)
'''

import cv2 
import numpy as np 

img = cv2.imread("./background1.jpg",0)
img = cv2.resize(img,(300,450))

# Thresholding : ret, thresholded = cv2.threshold(gray, threshold_value, 255, cv2.THRESH_BINARY)
_,th1 = cv2.threshold(img,50,255,cv2.THRESH_BINARY)

# Binary Inverse Threshold
_,th2 = cv2.threshold(img,50,255,cv2.THRESH_BINARY_INV)

# 
_,th3 = cv2.threshold(img,50,255,cv2.THRESH_TRUNC)


cv2.imshow("Threshold Binary - 1",th1)
cv2.imshow("Threshold Binary Inverse - 2",th2)
cv2.imshow("THRESH_TRUNC - 3",th3)
cv2.imshow("Original Image",img)

cv2.waitKey(0)
cv2.destroyAllWindows()


