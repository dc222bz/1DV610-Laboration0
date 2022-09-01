/**
 * The main script file of the application.
 *
 * @author Daniel Carlsson <dc222bz@student.lnu.se>
 * @version 1.0.0
 */

 import './components/my-name/index.js'
 import './components/my-color/index.js'
 
 document.querySelector('#containerName').appendChild(document.createElement('my-name'))
 document.querySelector('my-name').addEventListener('calculateColor', (event) => {
   document.querySelector('#containerColor').appendChild(document.createElement('my-color'))
 })
 