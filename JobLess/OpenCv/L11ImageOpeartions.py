import cv2 

img = cv2.imread("./background.jpg")
img = cv2.resize(img,(400,600))
# Image Operations
# 1. shape 
print(img.shape)  
print(img.size)
print(img.dtype)
print(type(img))
# print(cv2.split(img))
red,green,blue = cv2.split(img)
cv2.imshow("redColor",red)
cv2.imshow("greenColor",green)
cv2.imshow("blueColor",blue)


merge_image = cv2.merge((red,green,blue))
cv2.imshow("Merge Color",merge_image)

# Access the pixel value at the specified coordinates
row = 100
col = 200
pixel_value = img[row, col]
# The pixel_value is a NumPy array containing the BGR values
blue_value = pixel_value[0]
green_value = pixel_value[1]
red_value = pixel_value[2]
print(f"Pixel value at ({row}, {col}): B={blue_value}, G={green_value}, R={red_value}")

bluePixel = img[300,200,0] # for blue : 0
print("The Pixel Having blue color ==> ",bluePixel) 


cv2.imshow("Original",img)
cv2.waitKey(0)
cv2.destroyAllWindows()