# STUDIO DRINK

Studio Drink is a cutting-edge application designed to curate beverage recommendations tailored to your musical preferences. With the ability to cater to both alcoholic and non-alcoholic inclinations, our app offers a dynamic day/night mode to elevate your mood and enhance your overall experience.

For an optimal experience, we recommend creating an account and then signing in, which allows you to favorite drinks, concoct your own custom creations, and maintain a personalized user profile. Without an account, you can still peruse and explore our drink recommendations, but premium features will be inaccessible.

## Running the app

Please fork this repo. 

Enter psql in your terminal. Type 
```bash
CREATE DATABASE studiodrink;
```
Start both client and server with the following commands:

```bash
npm i
npm run dev
```

```bash
npm i
npm run seed
npm run start
```

Make sure Tailwind is running in another terminal in your client folder:

```bash
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch

```



