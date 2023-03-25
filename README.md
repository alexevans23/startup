# startup
I want to create a website that is designed to uplift, encourage, and inspire everyone that uses it so that they feel motivated and ready to go about their day while also helping the other site users to feel the same way. The main page would feature a quote of the day as well as a search bar or at least a selection of different feelings or virtues the user would like a quote about (ie: hope, motivation, stress, patience). There will be another tab where, once a user creates a login, they can post how they are feeling and other users are able to respond with either a quote of their own or an inspirational quote that fits the feelings. Another tab will allow users to submit an inspiring story that happened in their life, an family member or friends life, or an ancestors life. If I have enough time and skill, I will make another tab that allows users to submit inspirational quotes they have found, or even their own quotes for consideration to be added to the main database of quotes. If possible I will also consider adding a scripture search option on the main tab that could be toggled on and off.
![home page](https://user-images.githubusercontent.com/122852344/214469892-86468c22-893a-461c-bd76-56a88c5a0d7e.jpg)

![search example](https://user-images.githubusercontent.com/122852344/214469929-f2b2047b-62e0-4c79-928a-25b9bdfe287b.jpg)
![encourage page](https://user-images.githubusercontent.com/122852344/214469944-96bc1d20-4e2b-401b-9f55-4706da6ebad9.jpg)
![inpsire page](https://user-images.githubusercontent.com/122852344/214470030-387f5099-2644-40ae-b8db-a19ea702d813.jpg)
![motivate page](https://user-images.githubusercontent.com/122852344/214470047-039939ae-b2de-4f8b-a0c6-71718042e789.jpg)

The server's public IP Adrress is 3.129.140.40
The console command is ssh -i ~keys\uplift.pem ubuntu@3.129.140.40
Domain name: http://uplift365.click
To restart caddy: sudo service caddy restart
simon URL: simon.uplift365.click
This was a great exercise. I was confused about how links to different parts of the page would work in my start up project and this explained that all and the formatting.

To deploy to the server: ./deployFiles.sh -k ~/source/repos/keys/uplift.pem -h uplift365.click -s simon

It was good to learn how to connect CSS code to an html document. It was very simple

I still need to add Node.Js in order for my posts to be saved. That is the next step. It is a sort of API call type of thing using a command called POST
I was able to add the Simon Service fairly easily. It will be nice to see how it works because I will need to use this service as well as MongoDB extenisively on my project.
I enjoyed learning about MongoDB. I am fairly familiar with parsing through JSONS and getting the information I want from my RA position, but it was handy to see what the other side of that looks like. I am a little confused on how to set up an environment with my login credentials still, but I will continue studying that page and add that functionality when I can. I am also a little confused about when scores are populated to the database. Should they show up there each time I play the simon game?
