1. Overview
This project is for a take-home task: building a Node.js application that displays a customer’s energy accounts and allows users to make credit card payments.

The main focus is on the backend API server.

2. Features
API Endpoints

GET /accounts/:id – Get one account detail

GET /accounts – Get all account details

POST /payment/:accountId – Make a payment

API Documentation
Postman Collection (Public)

3. Testing
This project uses Jest and Postman to test the API.

Most test coverage focuses on the two main areas:
✅ Getting account details
✅ Making payments

A total of 12 test cases are covered:

Account and Balance Test Cases

1.All accounts in the mock data are returned
2.Each account has a calculated balance
3.If the balance is negative, it shows as "Credit"
4.If the balance is positive, it shows as "Due"
5.If there are no charges, the balance is 0 and shows "Due"

Payment Test Cases 
6. Valid payment is added successfully
7. Payment is declined due to invalid card format
8. Payment is declined due to expired card
9. Payment is declined if amount is over $3000
10. Payment is declined if the amount is negative
11. Payment is declined if utility type doesn’t match the account
12. Payment is declined if account ID is incorrect

4. Manual Setup
Clone this repository

Install dependencies:

```
npm install
```

Start the server:

```
npm run dev
```
The app runs on port 3000 by default. If port 3000 is already in use, open app.ts and update this.port = 3000  to another number (e.g., 3001).

5. Tech Stack
Express.js
One of the most widely used libraries for building backend API servers — especially suitable for small projects.
The project follows a hybrid layered architecture:

Routes – Handle HTTP method and path matching
Controllers – Handle requests and delegate logic to services
Services – Contain business logic (e.g., payment validation, balance calculation)
Repositories – Interact with mock data (accounts and charges)

Jest.js
A commonly used testing library in Node.js.
Used here to quickly test business logic, validate payment behavior, and simulate different account scenarios.