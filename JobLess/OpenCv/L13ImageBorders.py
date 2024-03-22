# Border : To create borders around an image in OpenCV, you can use the cv2.copyMakeBorder() function. This function allows you to add borders of a specified color and size to an image.
#  cv2.copyMakeBorder(image, top_border, bottom_border, left_border, right_border, cv2.BORDER_CONSTANT, value=border_color)
import cv2
import numpy as np

img1 = cv2.imread('./background.jpg')
img1 = cv2.resize(img1,(600,450))

# Create Image Border
border = cv2.copyMakeBorder(img1,20,15,10,5,cv2.BORDER_CONSTANT,value=[255,0,125])

cv2.imshow("Original Image",border)
cv2.waitKey(0)
cv2.destroyAllWindows()
