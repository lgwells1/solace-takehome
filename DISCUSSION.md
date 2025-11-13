1. LW-0003 Added `Advocate` type, and removed several fields from search logic.
I feel the search was searching too many fields, which may not include pertinent information, and also slowing down the feature. Some of these fields would be better used in a filtering sidebar or header, such as `degree` which could be just a few checkboxes. I removed name fields from search as it might invite biasing. We just need to connect customers with correctly skilled advocates. If time permits I will add a filter UI element.

Since I refactored the search on specialities to lowercase each element in the array I decided to limit when the search function actually starts searching to 3 or more characters. This gives us accurate results sooner in the process than it matching on any odd single or two character patterns. 


2. LW-0005 I wish I had much more time with styling. I am new to Tailwind, so I felt much of my remaining time spent on styling was searching. 

Things I wanted to accomplish but ran out of time.

1. Add a dynamic filter sidebar/topbar for elements I removed from search logic.
2. Add pagination, after 10 or so advocates you are dealing with a wall of information. This can also provide the user with matched advocate count. Sometimes I appreciate a total count when I am searching for something.
3. Move `Reset Search` button to right of search input, replace with button. 
4. Utilize the database.