# dictionary-app
A Dictionary App using React-Redux powered by Oxford Dictionary API

## Live Demo 
https://react-dictionary-app.herokuapp.com/

## To run project locally:
- Clone or download the dictionary-app repository
```sh
git clone https://github.com/chagonzles/dictionary-app.git
```
- Change directory or cd to dictionary-app
```sh
cd dictionary-app
```
- Install dependencies
```sh
npm install
```

- Start the project
```sh
npm start
```

## Notes:
- To view the app go to browser and type `localhost:3000`
- `localhost:8080` is a nodejs server app for calling Oxford API to fix CORS issue
- `localhost:8080/synonyms/<word>` is used for calling the Thesaurus GET API from Oxford Dictionary API internally from the client and <word> is any word for example, `localhost:8080/synonyms/code`
