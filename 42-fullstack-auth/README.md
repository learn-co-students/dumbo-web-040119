# Fullstack Auth

## SWBATs
- [x] Use Bcrypt to encrypt passwords and authenticate users
- [x] Use client-side routing to control user flow
- [ ] Use `localStorage` to store information on a user's browser
- [ ] Use headers on a request
- [ ] Use JWT to encode and decode information


## Notes

The point of auth is to have access to user data and do things for that user.

### Authentication
Process of verifying the user.
Login with a username & password
  - Can't verify based on password alone
  - Unique usernames that act to identify you (who are you)
  - Password to verify you are who you claim to be

#### Backend
Users table -> username & password_digest
BCrypt
Controller actions for logging in and signing up
Validations -> username uniqueness

#### Frontend
Controlled forms for logging in and signing up
Being able to change state
Using a fetch to send data to backend and receive response
Rendering errors
Client side routing (react router) to move our users around


### Authorization
Process of granting user access.


### Authentication

### Authorization

### Security with JWT

