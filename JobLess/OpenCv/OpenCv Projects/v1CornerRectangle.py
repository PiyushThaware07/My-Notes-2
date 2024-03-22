import cv2
import cvzone

cap = cv2.VideoCapture(0)
while True:
    success, img = cap.read()  

    """ 
    Rectangle
    cv2.rectangle(img,(200,200),(400,400),(255,0,255),3)
    """

    # corner rectangle alternative of above : 
    img = cvzone.cornerRect(
        img,  # The image to draw on
        (200, 200, 300, 200),  # The position and dimensions of the rectangle (x, y, width, height)
        l=30,  # Length of the corner edges
        t=5,  # Thickness of the corner edges
        rt=1,  # Thickness of the rectangle
        colorR=(255, 0, 255),  # Color of the rectangle
        colorC=(0, 255, 0)  # Color of the corner edges
    )

    cv2.imshow("Image", img)
    key = cv2.waitKey(1)
    if key == ord("c"):
        break

cap.release()
cv2.destroyAllWindows()
