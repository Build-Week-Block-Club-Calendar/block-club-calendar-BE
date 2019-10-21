# Block Club Calendar

## Table of Contents

- **[Overview](#overview)**<br>
- **[API Endpoints](#api-endpoints)**<br>
- **[Credits](#credits)**<br>

## <a name='overview'></a>Overview
This database allows users to register, login, and view all events in the database. It also allows the admin account to add, edit, and delete events as well as view all the users in the database.

## API Endpoints

### Authentication
Method | Endpoint | Body | Notes |
| ----- | ----------------- | ------------------------------ | ------------------ |
POST | /api/auth/register | username(REQUIRED), password(REQUIRED), email, name, organizations, avatarUrl, role | Creates a new user object in the database. |
POST | /api/auth/login |  username(REQUIRED), password(REQUIRED) | Returns username and JSON Web Token. |

### Events
Method | Endpoint | Body | Notes
| ----- | ----------------- | ------------------------------ | ------------------ |
GET | /api/events | N/A | Returns an object of all the events in the database. |
GET | /api/events/:id | N/A | Returns a singular event object based on ID. |
POST | /api/events | Title(REQUIRED), Date(REQUIRED), Time(REQUIRED), Location(REQUIRED), Description, Link, Image | Allows users to post brand new events to the database. |

### Events (non-admin)
Method | Endpoint | Body | Notes
| ----- | ----------------- | ------------------------------ | ------------------ |
DELETE | /api/events/:id | N/A | Allows users to delete their own events. |
PUT | /api/events/:id | Title(REQUIRED), Date(REQUIRED), Time(REQUIRED), Location(REQUIRED), Description, Link, Image | Allows users to edit their own events. |

### Events (admin)
Method | Endpoint | Body | Notes
| ----- | ----------------- | ------------------------------ | ------------------ |
DELETE | /api/events/:id | N/A | Allows admins to delete ANY event. |
PUT | /api/events/:id | Title(REQUIRED), Date(REQUIRED), Time(REQUIRED), Location(REQUIRED), Description, Link, Image | Allows admins to edit ANY event. |

## Users
Method | Endpoint | Body | Notes
| ----- | ----------------- | ------------------------------ | ------------------ |
GET | /api/users | N/A | Allows an admin to see a list of all the users in the database. |

## Credits
### Project Manager
Marina Baskova: https://github.com/MarinaBaskova

### User Interface
David Hennig: https://github.com/davidhennig

### Frontend
Jackson Ogles: https://github.com/cjogles
Louis Gelinas: https://github.com/gelinas

### Backend
Quinton McNamee: https://github.com/QuintonMcNamee