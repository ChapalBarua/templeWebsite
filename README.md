# TempleWebsite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0. This is a website built for the organization -Buddhist Society of Ontario. Some of the key features of the site -

1. Event Calendar (Event Section)- Users can see upcoming events from the calendar. Admins have privileged access to update and add new events in the calendar. Updating is not accessible to the general users.

2. Carousal (Media Section)- There is a photo album that shows recent uploaded photos in the website. ONly admins can upload photos.

3. File Upload and download (Media Section)- Admins can upload dosuments which will be available to download. Users can see and download files.

4. Email - in Contact section- there is a form which users can submit to send an automated email to the organization email address.

5. Authentication and authorized access control - There is standard login, logout, register feature to control access to certain features. Https protocol is used with server certificate to encrypt data. User passwords are hashed and saved - that way no one can know the exact user passwords. There is also RSA encryption technology to pass certain information more secured way that can only be decrypted with private key.

6. Showing Toast message for user operation such as successful login, unauthorized operation etc

7. MongoDb is used to store dataset. Uploaded files and photos are stored in certain directory in the server. There is a maintenance script to monitor and maintain the directory size for uploaded files.

## Development server

Use node version 16.16.0, npm version 8.11.0 and cli version 13.0.4

Run `npm start` for a dev server. Navigate to `https://localhost:4200/`. The app will automatically reload if you change any of the source files.