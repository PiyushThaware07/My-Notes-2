import cv2
import numpy as np

def cross(x):
    pass

# Blank Background
img = np.zeros((300, 512, 3), np.uint8)

# Create the window without the 'flags' parameter
cv2.namedWindow("Color Picker")

# Create Switch
switch = "0 : OFF\n1 : ON"
cv2.createTrackbar(switch, "Color Picker", 0, 1, cross)

# Creating For RGB Color
cv2.createTrackbar("R", "Color Picker", 0, 255, cross)
cv2.createTrackbar("G", "Color Picker", 0, 255, cross)
cv2.createTrackbar("B", "Color Picker", 0, 255, cross)

while True:
    # Resize the image (this doesn't modify the original image, so it's not necessary)
    cv2.resize(img, (500, 500))
    cv2.imshow("Color Picker", img)
    close = cv2.waitKey(1)
    if close == ord("c"):
        break

    # Now Get the trackbar position
    s = cv2.getTrackbarPos(switch, "Color Picker")
    r = cv2.getTrackbarPos("R", "Color Picker")
    g = cv2.getTrackbarPos("G", "Color Picker")
    b = cv2.getTrackbarPos("B", "Color Picker")

    if s == 0:
        img[:] = 0  # blank image
    else:
        # Trackbar values will be placed here
        img[:] = [r, g, b]

cv2.destroyAllWindows()
