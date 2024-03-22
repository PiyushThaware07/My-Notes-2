# Image Blending : Image blending is a technique used in computer vision and image processing to combine two or more images into a single composite image. 

import cv2
import numpy as np

img1 = cv2.imread('./background.jpg')
img1 = cv2.resize(img1,(300,450))
img2 = cv2.imread('./background1.jpg')
img2 = cv2.resize(img2,(300,450))


cv2.imshow("Result 1",img1)
cv2.imshow("Result 2",img2)

# Perform blending 
# 1. add : If you want to perform a simple addition of two images for blending in OpenCV without any weighting, you can use the cv2.add() function. This function adds pixel values from two images on a per-channel basis.
result = img2+img1
cv2.imshow("Blending Result 1",result)

# 2. cv2.add(img1,img2)  this is the most recommended method
result2 = cv2.add(img1,img2)
cv2.imshow("Blending Result 2",result2)


# set saturation of image which image should appear darker than other
# 2. cv2.addWeighted(image1, alpha, image2, beta, 0)
result3 = cv2.addWeighted(img1, 0.8, img2,0.2,0)
cv2.imshow("Blending Result 3",result3)


cv2.waitKey(0)
cv2.destroyAllWindows()