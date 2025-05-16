🧪 Practice Software Testing API - Automated Test Suite

This project contains a full suite of automated API tests written for the [Practice Software Testing API](https://api.practicesoftwaretesting.com/api/documentation#/). It tests core authentication features such as **registering users**, **login**, **password updates**, **forgot password**, and **logout**.

---

📌 Objective

The goal of this project is to:
- Test the reliability of core authentication APIs.
- Validate both **positive** and **negative** scenarios.
- Use automation to ensure these endpoints behave as expected under various conditions.

---

 📁 Folder Structure

practice-api-tests/
├── tests/ # Contains all test files
│ └── auth.test.js # Main file with all auth-related tests
├── .gitignore # Prevents node_modules and logs from being pushed
├── package.json # Project metadata and scripts
└── README.md # Full project guide and instructions


---

🧰 Technologies Used

| Tool      | Purpose                        |
|-----------|--------------------------------|
| Node.js   | JavaScript runtime             |
| Axios     | API HTTP requests              |
| Mocha     | JavaScript test runner         |
| Chai      | Assertion library              |

---

🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/practice-api-tests.git
cd practice-api-tests

3. Run the Tests
npm test

📋 Test Cases Covered
✅ Positive Scenarios
Feature	Endpoint	Description
Register User	POST /users/register	Registers a new user
Login	POST /users/login	Logs in a user and returns a token
Change Password	POST /users/change-password	Allows password update with token
Forgot Password	POST /users/forgot-password	Sends password reset email
Logout	POST /users/logout	Logs out user using token

Tokens are dynamically captured from login and reused for authenticated actions.

❌ Negative Scenarios
Attempting login with invalid credentials

Registering a user with an existing email

Changing password with wrong old password

Accessing endpoints with an invalid or missing token

Submitting empty fields in forms

Each test validates:

HTTP status codes

Error message correctness

Response format

🛠 How to Register a New User for Testing
Use a random email (or add a timestamp) in the registration test to avoid email conflict:


{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john" + Date.now() + "@example.com",
  "password": "Password123!"
} 

📦 Deployment (GitHub)
Step-by-Step to Push This Project
Initialize Git:


git init
Add all files:


git add .
Commit your code:

git commit -m "Initial commit - API test suite"
Link your GitHub repo:


git remote add origin https://github.com/YOUR_USERNAME/practice-api-tests.git
Push to GitHub:

git branch -M main
git push -u origin main

📄 Example Output (Terminal)
pgsql
Copy
Edit
  Practice Software Testing API
    ✓ Register a new user
    ✓ Login with valid credentials
    ✓ Change Password
    ✓ Forgot Password
    ✓ Logout user

  5 passing (3s)
👤 Author
Johnson Samuel
QA Engineer | Developer |  Automation Enthusiast


