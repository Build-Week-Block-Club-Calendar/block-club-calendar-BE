# Block Club Calendar

## Table of Contents

- **[Overview](#overview)**<br>
- **[API Endpoints](#api-endpoints)**<br>
- **[Credits](#credits)**<br>

## <a name='overview'></a>Overview
This database allows users to register, login, and view all events in the database. It also allows users to create, edit, and delete their OWN events. Finally, it allows the ADMIN account to create, edit, and delete ANY event as well as view all the users in the database.

## API Endpoints

### Authentication
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
POST | /api/auth/register | username, password | name, email, organizations, avatarUrl, role | Creates a new user object in the database. |
POST | /api/auth/login |  username, password | N/A | Returns username, JSON Web Token, and the user object. |

### Events
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
GET | /api/events | N/A | N/A | Returns an object of all the events in the database. |
GET | /api/events/:id | N/A | N/A | Returns a singular event object based on ID. |
POST | /api/events | Title, Date, Time, Location, Organizer | Description, Link, Image | Allows users to post brand new events to the database. |

### Events (non-admin)
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
DELETE | /api/events/:id | N/A | N/A | Allows users to delete their OWN events. |
PUT | /api/events/:id | Title, Date, Time, Location, Organizer | Description, Link, Image | Allows users to edit their OWN events. |

### Events (admin)
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
DELETE | /api/admin/:id | N/A | N/A | Allows admins to delete ANY event. |
PUT | /api/admin/:id | Title, Date, Time, Location, Organizer | Description, Link, Image | Allows admins to edit ANY event. |

### Users (admin)
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
GET | /api/admin/users | N/A | N/A | Allows an admin to see a list of all the users in the database. |

## Credits
### Project Manager
Marina Baskova: https://github.com/MarinaBaskova

### User Interface
David Hennig: https://github.com/davidhennig

### Frontend
Jackson Ogles: https://github.com/cjogles <br>
Louis Gelinas: https://github.com/gelinas

### Backend
Quinton McNamee: https://github.com/QuintonMcNamee