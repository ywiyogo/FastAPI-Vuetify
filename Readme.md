# Web App Boilerplate using FastAPI, Vue.js and Vuetify

Utilizing the framework of [FastAPI](https://fastapi.tiangolo.com/), [Vue.js](https://vuejs.org/), and [Vuetify](https://vuetifyjs.com/en/) as the UI library can boost up the development of a web application in 2020. This repository provides the starter boilerplate to combine those frameworks. The SQLite is the standard choice which can be changed in [database.py](.database.py).

## Getting Started

Installing the Python libraries:

    pip install -r requirements.txt

Installing the Vue.js library using `npm`:

    npm install vue

Starting the FastAPI server with:

    uvicorn main:app --reload

Starting the Vue.js development server:

    npm run serve

Open the browser with http://localhost:8080/ or open the FastAPI documentation UI with http://localhost:8000/docs.

![UI][web-ui]

## Testing the API using Insomnia Core

The tool can be download in https://insomnia.rest/download/. Below is an example to update the profile entry in the database.

```
{
	"id":"hj2t4fz",
	"email":"ywofe@gmail.com",
	"password": "gsefgees23",
	"gender": "male",
	"name": "afvse",
	"language": "english",
	"membership": "trial",
	"details": "efgsegesg sefges gse ges. afw"
}
```

# Credits

Vuetify Material Design: https://www.creative-tim.com/product/vuetify-material-dashboard

[web-ui]: vuetify-material/src/assets/UI.png