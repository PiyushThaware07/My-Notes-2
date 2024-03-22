# Region  Of Interest (ROF) : This will help to get a specific region in which you are intrested

import cv2
import numpy as np
# Read 
img = cv2.imread("./background.jpg")
img = cv2.resize(img,(600,798))

# ROI (Region Of Interest)
# top-left-end : (270,460)   bottom-right-end : (383,654)
# [(y1:y2),(x1:x2)]
# y = 194 x = 113  difference of y1-y2 and x1-x2


roi = img[460:654,270:383]
# now passing data in the image
img[460:654,384:497] = roi  # start 1px ahead so that no pixel should overlap  changeing only the x axis 270+113 : 497+113
img[460:654,157:270] = roi  # start 1px ahead so that no pixel should overlap
img[266:460,270:383] = roi  # start 1px ahead so that no pixel should overlap changing only the y axis

# Show
cv2.imshow("Original",img)
cv2.waitKey(0)
cv2.destroyAllWindows()