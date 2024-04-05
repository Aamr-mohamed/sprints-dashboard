# Project Installation

- Clone the repository:
  git clone https://github.com/Aamr-mohamed/sprints-dashboard.git

- Install dependencies:
  npm install

- Take a Tour in the project and read this readme file and look in the utils file

# Pages:

## 1) Signup Page

### a) Design

- Full name
- Phone number
- Address
- Country
- Email
- Password
- Confirm password (validate it matches the password)
- Submit/Signup button
- Login button (already have an account)

### b) Tech Requirements

- All fields are required.
- Email: Input type email.
- Password: Input type password.
- Country: Drop down.
- All other fields are text.
- On submit:
  - Check local storage for users array.
  - Check if user exists.
  - Validate password matches.
  - Validate on empty inputs.
  - Check for short password.
  - Navigate to success on validation pass.
- On success:
  - Hash password.
  - Create user object.
  - If users array is empty, create array with the new user; else append the new user to the users database.
  - Set the newly signed-up user to the local storage "user".
  - Navigate to Login page.
- On failure:
  - Toast with "User already exists" (based on Email).

## 2) Login Page

### a) Design

- Email
- Password
- Submit/Login button
- Signup button (don't have an account)

### b) Tech Requirements

- Email: Input type email.
- Password: Input type password.
- Prevent submit on:
  - Empty inputs.
  - Short password.
  - Wrong email format.
  - Decrypt password and check against registering users.
  - Show success toast and navigate to dashboard on success.
  - Show error toast (wrong password, wrong email) on failure.

## 3) Dashboard Page (Homepage)

### a) Design

- Sidebar buttons:
  - Home
  - Profile
  - Log out
- All users card
- All users table
- Design reference: [Figma Design](https://www.figma.com/file/IxLfNUmTq6hXv5XOk2iojX/rough-design?type=design&node-id=0%3A1&mode=design&t=5Qkmu383ZdJaF6yA-1)

### b) Tech Requirements

- Welcome line with user's full name.
- Sidebar:
  - Home button: Navigate to "/".
  - Profile button: Navigate to "/profile/${userId}".
  - Logout button:
    - Clear currentUser from local storage.
    - Navigate to login page.
- All users card: Get the length of all users from local storage.
- All users table: Loop over all users and render a table row for each one with respective data. Include edit and delete buttons.

## 4) Profile Page

### a) Design

- Design reference: [Figma Design](https://www.figma.com/file/IxLfNUmTq6hXv5XOk2iojX/rough-design?type=design&node-id=0%3A1&mode=design&t=5Qkmu383ZdJaF6yA-1)

### b) Tech Requirements

- Retrieve userId from URL, get user object from local storage.
- Populate the profile page as in the design.

## 5) Edit User Page

- Edit (email, full name, country, address) fields.
- Populate fields on page load.
- Replace the newly edited user in local storage "currentUser".
- Toast success "Updated successfully".
- Button back to the homepage "/".

# Tech Stack

- React.js
- Tailwind CSS
- LocalStorage

# Guidelines

- Use functional components.
- Use PascalCase for components.
- Place all components in a file with the name of the component.
- Extract larger chunks into reusable components.

# Git Workflow

- Create a new branch for every feature.
- Make small and concise commits.
- Commit messages should be descriptive of the change.
- Create a pull request and request a review.
