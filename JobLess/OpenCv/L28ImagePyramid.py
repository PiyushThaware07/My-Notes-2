'''
Image Pyramid :
Image pyramids are multi-scale representations of an image where each level of the pyramid is a lower-resolution version of the original image. 
we want to working on a image with different resolutions

types :
a. Gussian Pyramid : pyramids using the pyrDown() and pyrUp() functions.
b. Laplacian Pyramid
'''

import cv2
image = cv2.imread("./Thor.jpg")
image = cv2.resize(image,(500,330))
cv2.imshow("Original Image",image)


# Gussian Pyramids : down
pd1 = cv2.pyrDown(image)
cv2.imshow("Pyramid Down",pd1)
pd1Again = cv2.pyrDown(pd1)
cv2.imshow("Pyramid Down Again for pd1",pd1Again)

# up 
pd2 = cv2.pyrUp(pd1)
pd2Again = cv2.pyrUp(pd2)
cv2.imshow("Pyramid up for pd1",pd2)
cv2.imshow("Pyramid up again for pd2",pd2Again)




cv2.waitKey(0)
cv2.destroyAllWindows()
