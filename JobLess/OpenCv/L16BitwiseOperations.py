import cv2
import numpy as np 


img1 = np.zeros((400,400,3),np.uint8)
img2 = np.zeros((400,400,3),np.uint8)


img1 = cv2.rectangle(img1,(50,50),(150,150),(255,255,255),-1)
img2 = cv2.circle(img2,(150,150),60,(0,0,255),-1)
cv2.imshow("Image1",img1)
cv2.imshow("Image2",img2)
# and
bitAnd = cv2.bitwise_and(img1,img2)
cv2.imshow("Bitwise And",bitAnd)

# or
bitOr = cv2.bitwise_or(img1,img2)
cv2.imshow("Bitwise Or",bitOr)

# not
bitNot = cv2.bitwise_not(img1)
cv2.imshow("Nitwise Not",bitNot)

cv2.waitKey(0)
cv2.destroyAllWindows()