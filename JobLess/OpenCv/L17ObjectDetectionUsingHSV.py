import cv2
import numpy as np

# Load the image
frame = cv2.imread("./background2.jpg")
frame = cv2.resize(frame, (500, 450))

while True:
    # Convert the image to HSV color space
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

    # Define the range of green color in HSV
    ''' 
    # Green balls filter
    highIntensityValue = np.array([73, 255, 255])
    lowIntensityValue = np.array([33, 125, 25])
    ''' 
    # Red balls filter
    highIntensityValue = np.array([73, 255, 255])
    lowIntensityValue = np.array([33, 125, 25])


    # Create a mask to isolate the green color
    mask = cv2.inRange(hsv, lowIntensityValue, highIntensityValue)

    # Bitwise AND operation to get the result image with only green balls
    result = cv2.bitwise_and(frame, frame, mask=mask)

    # Display the original image, mask, and result
    cv2.imshow("Original Image", frame)
    cv2.imshow("Mask", mask)
    cv2.imshow("Result Image", result)

    # Wait for a key press for a short duration (10 milliseconds)
    key = cv2.waitKey(10)

    # If 'c' is pressed, exit the loop
    if key == ord("c"):
        break

# Close all OpenCV windows
cv2.destroyAllWindows()
