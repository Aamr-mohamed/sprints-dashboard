# sprints-dashboard

# Pages

## Signup Page
### Design
- Full name
- Phone number
- Address
- Country
- Email
- Password
- Confirm password (validate it matches the password)
- Submit/Signup button
- Login button (already have an account)

### Tech
- All fields are required.
- Email input type email.
- Input type password.
- Country dropdown.
- All other fields are text.
- On submit:
  - Check local storage for users array.
  - Check user exists.
  - Password matches.
  - On empty inputs.
  - Short password.
  - Go to success.

- On success:
  - Hash password.
  - Create user object.
  - If users array is empty, create array with the new user; else, append the new user to the users database.
  - Set the new signed up user to the local storage "user".
  - Navigate to the Login page.

- On failure:
  - Toast with user already exists (based on Email).

## Login Page
### Design
- Email
- Password
- Submit/login button
- Signup button (don't have an account)

### Tech
- Email input type email.
- Input type password.
- Prevent submit on:
  - Empty inputs.
  - Short password.
  - Wrong email format.
  - Decrypt password and check on registering users.
  - On Success show success toast and navigate to the dashboard.
  - On Failure show error toast (wrong password, wrong email) with the error.

## Dashboard Page (Homepage)
### Design
[Dashboard Design on Figma](https://www.figma.com/file/IxLfNUmTq6hXv5XOk2iojX/rough-design?type=design&node-id=0%3A1&mode=design&t=5Qkmu383ZdJaF6yA-1)

- Sidebar buttons:
  - Home
  - Profile
  - Log out

- All users card
- All users table

### Tech
- Welcome line with user's full name.
- Sidebar:
  - Home button: navigate to "/".
  - Profile button: navigate to "/profile/${userId}".
  - Logout button:
    - Clear currentUser from localStorage.
    - Navigate to the login page.

- All users card:
  - Get length of all users from local storage.
  
- All users table:
  - Loop over all users and render a table row for each one with respective data.
  - Edit button: navigate to /edit/userId with all fields populated of edited user info.
  - Delete button: show confirm() with "are you sure", on confirm delete with a success toast.

## Profile Page
### Design
[Profile Design on Figma](https://www.figma.com/file/IxLfNUmTq6hXv5XOk2iojX/rough-design?type=design&node-id=0%3A1&mode=design&t=5Qkmu383ZdJaF6yA-1)

### Tech
- Retrieve userId from URL, get user object from localStorage.
- Populate profile page as in the design.

## Edit User Page
### Design
- Edit (email, full name, country, address) fields.
- Populate fields on page load.
- Replace the new edited user in local storage "currentUser".
- Toast success "Updated successfully".
- Button back to the homepage "/".

# Tech Stack
- ReactJS
- TailwindCSS
- LocalStorage

# Guide Lines
- Functional components.
- Components PascalCase.
- All components be placed in a file with the name of the component.
- Extract bigger chunks into a reusable component.

# Git
- Create a new branch for every feature.
- Commits should be small and concise (created new component, fix css, installed package, etc.) and commit messages should be descriptive of the change.
- Create a pull request and request a review.
