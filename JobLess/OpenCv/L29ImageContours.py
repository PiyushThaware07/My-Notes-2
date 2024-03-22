''' 
Image contour detection is a fundamental computer vision technique used to identify and extract
the boundaries or outlines of objects within an image. Contours are a sequence of points that 
represent the shape of an object in an image.
'''

import cv2
import numpy as np
image = cv2.imread('./Thor.jpg')
gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
blurred_image = cv2.GaussianBlur(gray_image, (5, 5), 0)
_, thresholded_image = cv2.threshold(blurred_image, 100, 255, cv2.THRESH_BINARY)
contours, _ = cv2.findContours(thresholded_image, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
# Create a copy of the original image to draw contours on
contour_image = image.copy()

# Draw the detected contours in green color with a thickness of 2
cv2.drawContours(contour_image, contours, -1, (0, 255, 0), 2)

# Show the image with contours
cv2.imshow('Image with Contours', contour_image)
cv2.waitKey(0)
cv2.destroyAllWindows()


