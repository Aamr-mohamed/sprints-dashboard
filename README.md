# Project Installation

- Clone the repository:
    git clone 

- Install dependencies:
    npm install

- Take a Tour in the project and read this readme file

# Pages

## 1) Signup Page

### a) Design:
- Full name
- Phone number
- Address
- Country
- Email
- Password
- Confirm password (validate it matches the password)
- Submit/Signup button
- Login button (already have an account)

### b) Tech:
- All fields are required.
- Email: Input type email.
- Password: Input type password.
- Country: Drop down.
- All other fields: Text.
- On submit:
- Check local storage for users array.
- Check if the user exists.
- Validate if the password matches.
- Validate on empty inputs.
- Validate short password.
- Navigate to success page on success.

- On success:
- Hash password.
- Create user object.
- If users array is empty, create an array with the new user, else append the new user to the users database.
- Set the new signed up user to the local storage "user".
- Navigate to Login page.

- On failure:
- Toast with "User already exists" (based on Email).

## 2) Login Page

### a) Design:
- Email
- Password
- Submit/login button
- Signup button (don't have an account)

### b) Tech:
- Email: Input type email.
- Password: Input type password.
- Prevent submit on:
- Empty inputs.
- Short password.
- Wrong email format.
- Decrypt password and check on registering users.
- On Success: show success toast and navigate to dashboard.
- On Failure: show error toast (wrong password, wrong email) with the error.

## 3) Dashboard Page (Homepage)

### a) Design:
[Dashboard Design](https://www.figma.com/file/IxLfNUmTq6hXv5XOk2iojX/rough-design?type=design&node-id=0%3A1&mode=design&t=5Qkmu383ZdJaF6yA-1)

### b) Tech:
- Welcome line with the user's full name.
- Sidebar:
- Home button: navigate to "/".
- Profile button: navigate to "/profile/${userId}".
- Logout button: clear currentUser from local storage and navigate to login page.
- All users card: get length of all users from local storage.
- All users table: loop over all users and render a table row for each one with respective data. Include edit and delete buttons.

## 4) Profile Page

### a) Design:
[Profile Page Design](https://www.figma.com/file/IxLfNUmTq6hXv5XOk2iojX/rough-design?type=design&node-id=0%3A1&mode=design&t=5Qkmu383ZdJaF6yA-1)

### b) Tech:
- Retrieve userId from the URL, get the user object from local storage.
- Populate the profile page as in the design.

## 5) Edit User Page

### a) Design:
- Edit (email, full name, country, address) fields.
- Populate fields on page load.
- Replace the new edited user in local storage "currentUser".
- Toast success "Updated successfully".
- Button back to the homepage "/".

# Tech Stack
- React.js
- Tailwind CSS
- LocalStorage
- react-router-dom
- react-toastify
- Formik
- Yup

# Guidelines
- Use functional components.
- Use PascalCase for components.
- Place all components in a file with the name of the component.
- Extract bigger chunks into a reusable component.

# Git Guidelines
- Create a new branch for every feature.
- Commits should be small and concise (created new component, fixed CSS, installed package, etc.) and commit messages should be descriptive of the change.
- Create a pull request and request a review.
