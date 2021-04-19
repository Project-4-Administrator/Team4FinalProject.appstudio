/*
Changes to make to use in project: 
1. Read about the HTMLview control: https://wiki.appstudio.dev/HTMLView
2. Add an HTMLview control (under Multimedia) to the form (name it htmvCalendar). 
3. In the HTMLview control property 'innerHTML', paste all the HTML code.
4. must use these property settings:
     > form height: 800
     > form width: 120
     > form position: absolute
5. drag these two files onto Project Explorer so they get saved within 
   the project:
   > app.js file (contains the interactive javascript code)
   > style.css file (contains the CSS styles)
6. Add this to the Project property “ExtraHeaders”:
   <script
   src="https://code.jquery.com/jquery-3.2.1.min.js"
   integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=crossorigin="anonymous"
   </script> 
7. Deploy it in Volt to see how it works on the phone (you'll have to drag
   it to the center).
8. Remove all the ‘Repeated Test Event’ test events (see 
   console when you run it in browser). 
9. Figure out how to hard-code events that you already know about. 
10. Make at least two changes. Some possibilities:
   > change # people to something else
   > change the color from blue to something else
   > get it to center on the phone without dragging it to center
*/