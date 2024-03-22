import cv2
import cvzone

cap = cv2.VideoCapture(0)
while True:
    success,img = cap.read()

    """ 
    Adding Text 
    cv2.putText(img,text,start_Coordinate,font,fontSize,color,thickness,lineType)

    # Adding text to the align-item-center of the rectangle
     font = cv2.FONT_ITALIC
    textData = "Piyush Thaware"
    img = cv2.putText(img,textData,(50,50),font,1,(255,0,255),2,cv2.LINE_AA)
    cvzone.cornerRect(img,(200,200,400,300),30,5,1,(255,0,255),(0,255,0))
    """ 








    # Alternative of above code 
    # Use cvzone.putTextRect to draw text with a background rectangle : 
    # cvzone.putTextRect(img, text, text_position, font_scale, font_face, text_color, text_thickness)
    cvzone.putTextRect(
        img, "Piyush Thaware", (50, 50),  # Image and starting position of the rectangle
        scale=3, thickness=3,  # Font scale and thickness
        colorT=(255, 255, 255), colorR=(255, 0, 255),  # Text color and Rectangle color
        font=cv2.FONT_HERSHEY_PLAIN,  # Font type
        offset=10,  # Offset of text inside the rectangle , gap or padding
        border=5, colorB=(0, 255, 0)  # Border thickness and color
    )











    

    cv2.imshow("Image",img)
    key = cv2.waitKey(1)
    if key == ord("c"):
        break 
cv2.destroyAllWindows()