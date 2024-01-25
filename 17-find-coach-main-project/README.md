## Firebase settings

Project requires Realtime Database and Authentication.

### For Database, set rules like this:

  "rules": {
    "coaches": {
       ".read": "true",
      	".write": "auth != null"
    },
    "requests": {
        ".read": "auth != null",
      	".write": "true"
    },
  }

Update FIREBASE_URL in settings.js (from Realtime Database settings).

### For Authentication, enable auth with email and password. 

Provide api key (Firebase Console / Project settings / General):
    - create .env.local file in project's root directory,
    - in this file, declare key: VUE_APP_FIREBASE_API_KEY=abc123
    - restart server