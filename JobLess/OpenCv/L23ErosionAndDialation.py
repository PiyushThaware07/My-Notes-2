# Morphological Transformation : Erosion , Dialation

import cv2
import numpy as np

# Erosion : Erosion is a fundamental image processing operation used to reduce the size of foreground objects in a binary image while removing small noise regions.
# Read a binary image (0 for background, 255 for foreground)
image = cv2.imread('./background.jpg', cv2.IMREAD_GRAYSCALE)
image = cv2.resize(image,(400,400))
cv2.imshow('Original Image', image)

# Define a kernel (structuring element)
kernel = np.ones((3, 3), dtype=np.uint8)  # 3x3 square kernel
cv2.imshow('Kernel', kernel)

# Perform erosion
erosion_result = cv2.erode(image, kernel, iterations=1)
cv2.imshow('Erosion Result', erosion_result)


#-----------------------------------------------------------
# Dialation : is an image processing technique that makes the bright regions in an image (typically represented as white pixels) expand or grow. It does this by spreading the white areas into nearby black areas. Imagine it as if you were inflating balloons inside the white regions of a black-and-white image.
dilation_result = cv2.dilate(image, kernel, iterations=1)
cv2.imshow('Dilation Result', dilation_result)


cv2.waitKey(0)
cv2.destroyAllWindows() 

