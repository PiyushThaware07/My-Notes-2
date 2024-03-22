#### Video With URL
"""
import cv2
video_url = "D:\\CODING\\OpenCv\\sample.mp4"
capture = cv2.VideoCapture(video_url)
# Define the codec and create a VideoWriter object
fourcc = cv2.VideoWriter_fourcc(*'XVID')
output = cv2.VideoWriter('output.mp4', fourcc, 30, (640, 480))

while True:
    boolValue,frame = capture.read()
    # Normal
    image_resize  = cv2.resize(frame,(300,500))
    cv2.imshow("Normal Result",image_resize)
    # Gray
    image_colorChange = cv2.cvtColor(image_resize,cv2.COLOR_BGR2GRAY)
    cv2.imshow("Gray Result",image_colorChange)
    close = cv2.waitKey(10)
    image_store = output.write(frame)
    if close == ord("c"):
        break
capture.release()
output.release()
cv2.destroyAllWindows()
"""

### Live Video footage
import cv2 
import cv2
libe_capture = cv2.VideoCapture(0)
while True:
    boolValue,frame = libe_capture.read()
    image_resize  = cv2.resize(frame,(500,500))
    cv2.imshow("Normal Result",image_resize)
    close = cv2.waitKey(10)
    if close == ord("c"):
        break
capture.release()
cv2.destroyAllWindows()

