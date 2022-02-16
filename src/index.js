import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store';           /* create new import for new redux store - here is my new store */
import { Provider } from 'react-redux';          /* react-redux#2  import context from react-redux */



/*############# EVERY LESSON SUMMARY:
LESSON# 56
- moved class component to the UsersContainer - now class component will be responsible only for server requests
- created functional component, sent all the props to it, now this functional
 component is responsible for returning jsx
*/


ReactDOM.render(
    <React.StrictMode>
<Provider store={store}>       {/* React-redux#1 wrap App in to Provider and specify for him props as value={store}, works exactly as native redux, you just creating a context*/}
      <App />
</Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );


reportWebVitals();





/*############# EVERY LESSON SUMMARY:
LESSON #55
  -in Users.js => moved axios request from the constructor to componentDidMount(){}, removed constructor
  -users-reducer.js=> added to state variables: pageSize, totalUserCount, currentPage
  -Users-container=> pass new(3) variables to User.js component
  -Users.js => inside the render function before return => calculate how many pages you will need (users/amountUsersPerPage), use Math.ceil() to round the digit to a bigger integer 
  -Users.js => inside the render function before return => push all the pages to an array :pagesArray
  -Users.js => inside return => map through the pagesArray and render a span with the page number for each page. also set the className to check if currentPage from state===page from map and set for that page special class to be able to recognize which page is current.
  -Users.js => componentDidMount => change your request from hardcoded to responsive, using your variables: currentPage, pageSize.  for that remember to wrap whole request in the backtick `${variable} text ${variable}`
  - So you have to change the currentPage in the state, clicking on a page number: set an action listener onClick to all <span>page</span> 
and make whole pipe line: (onClick=>function in the class=>props.method=>AC=>dispatch)  you have to send clicked page number through all the arguments all the way to state.
important: onClick should call to a function in your class: (setCurrentPage), and then that function should call to props.setCurrentPage. you will understand this in the next step.
  -  -Users.js =>setCurrentPage function => copy ajax request in to this function and change EndPoint ?page=${this.curre...} to ?page${page} to received page
what you just clicked! 
why?   because method componentDidMount invokes ONLY ONCE!!! when function is born (there you make your first server request), but when you do some actions 
on your page you need to rerender it, and for that you will be making request each time we press at another page number, and because this another page we have
only in received arguments as (page) and our currentPage is not accurate anymore (it is old, and we pressed new page now),  so we will pass the new page to request.
  -users-reducer.js => change SET_USERS dispatch to reassign new users each time.
  -Users.js=> setCurrentPage function => ajax server request=>  dispatch totalUserCount for state (make whole pipeline...), so each time you making 
  the request you check the  number of users from response and change your state value "totalUsersCount" through dispatch and rerender the page. 




LESSON #53
implemented first class component to Users.js file and component
*/

/*
LESSON #51
installed axios library: npm install axios --save
import axios in to users.jsx component
made first server request with axios.get().then()   at users.jsx component
add a folder with a picture and imported that picture to users.jsx
*/

/*lesson#47.1 we removed rerenderEntireTree subscriber function on state change, 
and we removed invoking the function rerenderEntireTree. so now we could remove actual function rerenderEntireTree
and live only what was inside it, because only at the start this code will be rendering our app, we do not 
need to call it again.
 */