import cv2
image_path = cv2.imread("./background.jpg")
image_resize = cv2.resize(image_path,(500,400))
image_colorChange = cv2.cvtColor(image_resize,cv2.BORDER_REFLECT)
image_flip = cv2.flip(image_colorChange,-1)
image_display = cv2.imshow("Result",image_flip)
image_store = cv2.imwrite("./output.jpg",image_path)
close = cv2.waitKey(0)
if close == ord("c"):
    cv2.destroyAllWindows()


"""
## Take input from user and convert it to grayscale
import cv2
user_input = input("Enter the url : ")
read_image = cv2.imread(user_input,0)
resize_image = cv2.resize(read_image,(420,320))
cv2.imshow("Questions",resize_image)
cv2.waitKey()
cv2.destroyAllWindows()
"""