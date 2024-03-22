# extracting object from the image and place to the another image

import cv2
import numpy as np
# Load Images
img1 = cv2.imread("./background.jpg")
img2 = cv2.imread("./background1.jpg")

# resize
img1 = cv2.resize(img1,(320,450))
img2 = cv2.resize(img2,(200,300))  # from whatever image you are extracting the object must have smaller size as compared to the image in which we are going to place that image


# Threshold
rows,columns,channels = img2.shape

# ROI  : Region of interest
roi = img1[0:rows,0:columns]
# print(roi)

# now creating mask for img1
img_gray = cv2.cvtColor(img2,cv2.COLOR_BGR2GRAY)

# thresholding
_,mask = cv2.threshold(img_gray,55,255,cv2.THRESH_BINARY)


# remove background of img2 
mask_inv = cv2.bitwise_not(mask)

# put mask into roi
img1_bg = cv2.bitwise_and(roi,roi,mask=mask_inv)


# Extracting object
img2_fg = cv2.bitwise_and(img2,img2,mask=mask)


# add both image
result = cv2.add(img1_bg,img2_fg)

# final 
final = img1
final[0:rows,0:columns] = result


# display 
cv2.imshow("Image - 1",img1)
cv2.imshow("Image - 2",img2)
cv2.imshow("ROI ",roi)
cv2.imshow("Imgae - 2 Gray ",img_gray)
cv2.imshow("Thresholding Binary",mask)
cv2.imshow("remove background of img2",mask_inv )
cv2.imshow("Put mask into roi",mask_inv)
cv2.imshow("Extract object",img2_fg)
cv2.imshow("Result",result)
cv2.imshow("Final",final)

cv2.waitKey(0)
cv2.destroyAllWindows()
