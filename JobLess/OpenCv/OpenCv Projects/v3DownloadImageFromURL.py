import cv2
import cvzone

imgNormal = cvzone.downloadImageFromUrl(
    url='https://github.com/cvzone/cvzone/blob/master/Results/shapes.png?raw=true')

imgPNG = cvzone.downloadImageFromUrl(
    url='https://github.com/cvzone/cvzone/blob/master/Results/cvzoneLogo.png?raw=true',
    keepTransparency=True)
imgPNG = cv2.resize(imgPNG, (0, 0), None, 3, 3)

# Create a GUI window
cv2.namedWindow("Image Normal", cv2.WINDOW_NORMAL)
cv2.namedWindow("Transparent Image", cv2.WINDOW_NORMAL)

# Display the images in the GUI windows
cv2.imshow("Image Normal", imgNormal)
cv2.imshow("Transparent Image", imgPNG)

# Wait for a key press and close the windows when a key is pressed
cv2.waitKey(0)
cv2.destroyAllWindows()
