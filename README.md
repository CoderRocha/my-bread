# myBread

"myBread" is a simple Web App project created by me, Guilherme Rocha, to understand more the process of creating a React Application from the ground up, utilizing many of the React features, such as "React Hooks", and more about realtime databases using 'Firebase'.

# How to run the app correctly?

After you download and extract all the source code on the zip file to it's own folder, you can run the following commands in order on the project directory terminal to install the necessary dependencies to run the application without any issues:

### `npm install`

After the installation, you need to install a specific 'Firebase' version, so the 'Realtime Database' works properly.
Run the following command to install the correct version for this project:

### `npm install firebase@8.5`

After both installations, to run the React application, you need to run the following command in a terminal:

### `npm run start`

And then, access the application in the following local URL:
[http://localhost:3000](http://localhost:3000)

The project is about a simple financial tracker app that let users create their own account and add transactions as they wish. They can add a name and amount to each transaction, and then, it'll be added to the transaction list, tied to their account only, so each user can add transactions without interfering with other users transactions.

You can also delete transactions so it only appears the transactions that you want to see at the moment.

It is very simple and intuitive, so you can track your expenses easily to keep your financial life on the tracks.

## App Features

- Login / Sign Up feature
- Transaction 'Form' so you can add transactions with a 'Name' field and a specific 'Amount' field.
= Transactions 'List' to display the transactions you've added.

## Technologies used in this project

- HTML5
- CSS3
- Javascript
- React.js
- Firebase (Authentication and Realtime Database)

### Final Considerations

You can't create an account with the same e-mail address. Each time you create a new account, make sure to use a different e-mail address.

The 'Name' can be the same for multiple accounts, as the system only counts for the e-mail and password to create the account.