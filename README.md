# Fetching data from Fake API Using Axios on webpack-dev-server


## Description

I've tried to carry out GET data, POST data, PUT data and DELETE data simultaneously with DOM manipulation using Fake API and localhost.

<h3><u>fake-api/employee.json</u></h3>


<dl>
  <dt><u>Localhost rooted</u> fake API's <strong>JSON file</strong></dt>
  <dd>This file is file that data would be fetched. The example is as following.</dd>
</dl>

```json
   {
     "employees": [
       {
         "name": "remidosol",
         "department": "Software",
         "salary": "0",
         "id": 1
       },
       {
         "name": "Suicide Engineer",
         "department": "Crime",
         "salary": "10000",
         "id": 2
       },
       {
         "name": "Server-i Garâm",
         "department": "Literature",
         "salary": "10",
         "id": 3
       },
       {
         "name": "Mustafa SARI",
         "department": "Project Manager",
         "salary": "5000",
         "id": 4
       },
       {
         "name": "Küfran İcazcı",
         "department": "Sad Story",
         "salary": "4000",
         "id": 5
       }
     ]
   }
   ```

***

<h3><u>src/requests.js</u></h3>


<dl>
  <dt>Creating Instance</dt>
  <dd>Via using npm package for Axios, a instance that produced for HTTP requests 
      has been created in requests.js as modular as shown following.</dd>

   ```javascript
   import ax from 'axios';
   export function Requests() {
       this.req = ax.create({
           baseURL: `http://localhost:3000/employees/`,
           headers: {
               "Content-type": "application/json; charset=utf-8"
           }
           // ,timeout:1000
       });
   }
   ```

  <dt>Using Instance</dt>
  <dd>For using instance, methods have been created as named <em>getRequest</em>, <em>postRequest</em>, <em>putRequest</em>, <em>deleteRequest</em>.</dd>
</dl>

***

<h3><u>src/ui.js</u></h3>


<dl>
  <dt>Add/Edit/Delete Employee from UI</dt>
  <dd>DOM manipulation for <em>index.html</em>.</dd>
</dl>

***

<h3><u>src/index.js</u></h3>

<dl>
  <dt>Main File</dt>
  <dd>This is the main file for <strong>execute all operations</strong>.</dd>
</dl>


***

<u><h3>index.html</h3></u>


<dl>
  <dt>Skeleton</dt>
  <dd>This file is reference for <strong>events</strong> and <strong>DOM</strong>.</dd>
</dl>