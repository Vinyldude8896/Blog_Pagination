## The product team has decided that we want to make improvements to this application.

### Questions:
<br>

 ## 1. Right now the data for the posts is coming from a json file. What changes would you have to make to the application if it came from an API? In what type of hook should you use to fetch the data and why? What other considerations would you have to make?
<br>

- First I would install axios and then import it into to the HatchwaysBlog.jsx file.<br>
- Then I would add a variable inthe UseEffect hook to store the url for the api.<br>
- the fetchPosts async function would then be changed to use the axios get method to fetch the posts data.<br>
- I would consider setting request limits by possibly using a limit and offset <br>
- Then I could make several subsequent calls for the records by splitting them into smaller calls<br>
- these results would then be used in the setposts. <br>
- this would be implemented using a then and a catch in case of error returning results. <br>
- this data is then passed to the BlogList component. <br>
- in the Bloglist when passing props to the BlogPost component it may be neccessary to change the values for. author, title, expert etc, based on the objects returned.<br>
- one feature we could add to the site is a loadmore option, so initially the site can load 1000 posts, and if the user request more posts we can make the subsequent api call for the next set of records>
<br>

## 2. Part of this application uses the package nanoid to generate keys. What issue would this cause for generating keys in React? <br>

- Using a random generator for keys forces the process to always view every element in the array as "new or "changed"<br>
- this forces it to rerender and  can cause unwanted side effects<br>
- the documentation for nanoid suggested using another method instead "You should rather try to reach for stable ID inside your list item.", "In case you don’t have stable IDs you'd rather use index as key instead of nanoid():", "In case you just need random IDs to link elements like labels and input fields together, useId is recommended. That hook was added in React 18."<br><br>