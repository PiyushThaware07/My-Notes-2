import cv2
import pafy

url = "https://www.youtube.com/watch?v=wIAs97ynODo&list=PLaHodugB5x-Ddy_H951h0VHjOjfzZNCBh&index=7"
video = pafy.new(url)
best_stream = video.getbest(preftype="mp4")

# Open the video stream
cam = cv2.VideoCapture(best_stream.url)

while True:
    ret, frame = cam.read()
    if not ret:
        break

    frame = cv2.resize(frame, (300, 270))
    cv2.imshow("Result", frame)

    key = cv2.waitKey(1)  # Adjust the delay as needed (1 millisecond in this case)

    # Exit the loop when the 'q' key is pressed
    if key == ord('q'):
        break

cam.release()
cv2.destroyAllWindows()
