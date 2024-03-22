##########  SCREEN RECODER
'''
import cv2
import pyautogui
import numpy as np

# Create resolution
resolution = pyautogui.size()
print("Resolution: ", resolution)

# File path where we store the recording
storage_path = "D:\\CODING\\OpenCv"

# Define the frame rate
fps = 60.0

# Define the codec and create a VideoWriter object
fourcc = cv2.VideoWriter_fourcc(*'XVID')
output = cv2.VideoWriter('ScreenRecording.mp4', fourcc, fps, resolution)

# Create Recording Module
cv2.namedWindow("Live_Recording", cv2.WINDOW_NORMAL)
cv2.resizeWindow("Live_Recording", (550, 500))

# Capture
while True:
    img = pyautogui.screenshot()
    frame = np.array(img)
    frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    output.write(frame)
    cv2.imshow("Live_Recording", frame)

    close = cv2.waitKey(1)
    if close == ord("c"):
        break
output.release()
cv2.destroyAllWindows()
'''


##########  BREAK VIDEO TO MULTIPLE FRAME
import cv2
video_capture = cv2.VideoCapture("D:\\CODING\\OpenCv\\sample.mp4")
# Reading the video
boolVal,image = video_capture.read() 
count = 0
while True:
    if boolVal == True:
        resizeImage = cv2.resize(image,(500,400))
        # Save to storage 
        cv2.imwrite("D:\\CODING\\OpenCv\\FrameToImage"%count,image)
        video_capture.set(cv2.CAP_PROP_POS_MSEC,(count**100))
        boolVal,image = video_capture.read()
        # Display
        cv2.imshow("Frames Results",resizeImage)
        count = count+1

        if cv2.waitKey(1):
            break
            cv2.destroyAllWindows()

video_capture.release()
cv2.destroyAllWindows()