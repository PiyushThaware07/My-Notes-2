'''
Que.1 
Write a program to read the text from a given ile "poem.txt" 
and find out wether it contain "twinkle" word.
'''
with open('ch-9.File I and o\Practice set\Poem.txt', 'r') as f:
    a = f.read()
    print(a)
    if 'Twinkle' in a:
        print('Found')
    else:
        print('Not Found !')

    if 'Pawan' in a:
        print('Yes')
    else:
        print('No')


'''
Que.2
A game() function in a program let a user play a game and returns
the score as an integer.You need to read a file 'Hiscore.txt' which
is either blank or contains the previous Hi-score.you need to write
a program to update the Hi-score whenevr the game() breaks the hi-score.
'''


def game():
    return 450


score = game()
with open('ch-9.File I and o\Practice set\Que2.txt', 'r') as f:
    hiscorestr = f.read()

    if hiscorestr == '':
        with open('ch-9.File I and o\Practice set\Que2.txt', 'w') as f:
            f.write(str(score))
    elif int(hiscorestr) < score:
        with open('ch-9.File I and o\Practice set\Que2.txt', 'w') as f:
            f.write(str(score))

'''
Que.3
Write a python program to write a multiplication table in "Que3.txt" file 
'''
with open('ch-9.File I and o\Practice set\Que3.txt', 'r') as f:
    table = f.read()
    Enter = int(input('Enter the Number -->'))
    if table=='': 
        with open('ch-9.File I and o\Practice set\Que3.txt', 'w') as f:
            for i in range(1,11):
                data = f'{Enter} X {i} = {Enter*i}\n'
                f.write(data)
    else:
        print('File is Already written')

'''
Que.4
A file contains the word "Donkey" multiple times you need to write a program which 
replace this word with ###### by updating the same file.
'''        
with open('ch-9.File I and o\Practice set\Que4.txt','r') as f:
    data = f.read()
    if 'donkey' in data:
        with open('ch-9.File I and o\Practice set\Que4.txt','w') as w:
            update_file = data.replace('donkey', '######')
            w.write(update_file)


'''
Que.5
Repeat Que.4 for a list for such words and replace them by '#$%^&*!@'
'''            
words = ['donkey','dum','ugly','welldone']
with open('ch-9.File I and o\Practice set\Que5.txt','r') as r:
    content = r.read()

    for word in words:
        content = content.replace(word,'@#$%^&*')
        with open('ch-9.File I and o\Practice set\Que5.txt','w') as w:
            w.write(content)

'''
Que.6
Write a python program to check whether a file content "python" or not
'''
with open('ch-9.File I and o\Practice set\Que6.txt') as r:
    content = r.read().lower()
    if 'python' in content:
        print('Yes Present')
    else:
        print('Not Present') 

'''
Que.7
If 'Python' is present in Que.6 the in which line does it occurs.
'''           
i = 1
with open('ch-9.File I and o\Practice set\Que6.txt') as r:
    while content:
        content = r.readline().lower() 
        i+=1  

        if 'python' in content:
                print('Yes Present in line no :',i)


'''
Que.8
Write a program to make a copy of a text file 'Que8.txt'
'''                
with open('ch-9.File I and o\Practice set\Que8.txt','r') as r:
    data = r.read()
with open('ch-9.File I and o\Practice set\Solution-8.txt','w') as w:
    w.write(data)

'''
Que.9
Check whether the content for two file is identical or not
'''       
file1 = open('ch-9.File I and o\Practice set\Que8.txt')
content1 = file1.read()
file2 = open('ch-9.File I and o\Practice set\Solution-8.txt')
content2 = file2.read()
if content1 == content2:
    print('Yes same contnet is available')
else:
    print('no the content is not same') 

'''
Que.10
write a program to wipe out the content for a "Que10.txt" file.
'''    
with open('ch-9.File I and o\Practice set\Que10.txt') as r:
    content = r.read()
    if content!='':
        with open('ch-9.File I and o\Practice set\Que10.txt','w') as w:
            w.write("") 
    else:
        print('no data is present')      


'''
Que.11
Write a python program to rename a file "renamed_by_python.txt"
'''    
import os             
oldname = "ch-9.File I and o\Practice set\sample.txt"
newname = "ch-9.File I and o\Practice set/renamed_by_python.txt"
with open(oldname) as f:
    content = f.read()

with open(newname,'w') as w:
    w.write(content)

os.remove(oldname)
