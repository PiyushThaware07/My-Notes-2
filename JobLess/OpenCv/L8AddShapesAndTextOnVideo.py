import cv2 
import datetime as dt

video_url = "./sample.mp4"
capture = cv2.VideoCapture(video_url)
# Get Height & Width of the video
print("For Video Width == ",capture.get(cv2.CAP_PROP_FRAME_WIDTH))
print("For Video Height == ",capture.get(cv2.CAP_PROP_FRAME_HEIGHT))
# alternative of above
print("For Video Width ==> ",capture.get(3))  # 3 for width
print("For Video Height ==> ",capture.get(4))  # 3 for height



while True:
    _,frame = capture.read()
    frame = cv2.resize(frame,(500,400))  # changing the dimensions only or resize them


    font = cv2.FONT_HERSHEY_DUPLEX
    textData = "Hello Piyush"
    frame = cv2.putText(frame,textData,(50,60),font,0.8,(255,0,0),1,cv2.LINE_AA)


    font = cv2.FONT_HERSHEY_PLAIN
    textData = f"Current Date & Time : {dt.datetime.now()}"
    frame = cv2.putText(frame,textData,(50,80),font,0.8,(0,0,255),1,cv2.LINE_AA)

    frame = cv2.rectangle(frame,(50,200),(100,250),(0,0,255),1)

    cv2.imshow("Result",frame)
    close = cv2.waitKey(10)
    if close == ord("c"):
        break 
cv2.destroyAllWindows()
