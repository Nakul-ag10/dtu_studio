# Production Deployment Checklist

## Environment Setup

### Backend

- [ ] Copy `.env.example` to `.env` and fill in production values:
  ```
  MONGODB_URI=<production-mongodb-connection-string>
  PORT=5000
  NODE_ENV=production
  JWT_SECRET=<strong-random-secret-key>
  JWT_EXPIRY=7d
  CORS_ORIGIN=https://yourdomain.com
  ```
- [ ] Verify `JWT_SECRET` is strong (at least 32 characters)
- [ ] Ensure `CORS_ORIGIN` points to your production frontend domain
- [ ] MongoDB URI uses production cluster with strong credentials

### Frontend

- [ ] Copy `.env.example` to `.env` and fill in production values:
  ```
  VITE_API_URL=https://api.yourdomain.com/api
  NODE_ENV=production
  ```
- [ ] Verify `VITE_API_URL` points to production backend

## Dependencies

### Backend

- [ ] Run `npm install` to ensure all dependencies are installed
- [ ] Verify `multer` is installed (for file uploads)
- [ ] All dev dependencies (nodemon) are in `devDependencies`

### Frontend

- [ ] Run `npm install` to ensure all dependencies are installed
- [ ] Verify unused dependencies have been removed
- [ ] Check that only necessary packages are in `dependencies`

## Code Quality

### Backend

- [ ] All console logs removed (except essential error logs)
- [ ] Input validation implemented on all routes
- [ ] Error handling middleware in place
- [ ] CORS configured with allowed origin (not wildcard in production)
- [ ] File upload limits enforced (50MB for PDFs, 5MB for images)
- [ ] MongoDB connection error handling implemented

### Frontend

- [ ] No `any` types in TypeScript code
- [ ] All unused imports removed
- [ ] No commented-out code
- [ ] All images have `alt` attributes
- [ ] All lists have proper `key` props
- [ ] Environment variables used for API configuration

## Build & Performance

### Frontend

- [ ] `npm run build` completes without errors
- [ ] Build output is in `dist/` directory
- [ ] No source maps in production (`sourcemap: false` in vite.config.ts)
- [ ] Code splitting configured for large dependencies
- [ ] Image files optimized (under 500KB where possible)
- [ ] TypeScript strict mode enabled/checked

### Backend

- [ ] Starts without errors: `npm start`
- [ ] Listens on correct port
- [ ] MongoDB connection verified
- [ ] All routes accessible and respond correctly

## Security

### Backend

- [ ] No sensitive data in console logs
- [ ] Password reset tokens not exposed
- [ ] JWT secrets are environment variables (never hardcoded)
- [ ] File upload validation enforces MIME types
- [ ] ObjectId validation prevents invalid queries
- [ ] Input validation prevents injection attacks
- [ ] CORS only allows production origin

### Frontend

- [ ] No API keys hardcoded
- [ ] Auth token stored securely in localStorage (consider httpOnly cookies)
- [ ] No sensitive data in Redux/Context storage
- [ ] API calls use relative paths proxied through Vite dev server

## File Structure

### Backend

```
Backend/
├── index.js (main entry point)
├── package.json
├── .env.example
├── .gitignore (includes uploads/)
├── middleware/
│   ├── authMiddleware.js
│   ├── uploadMiddleware.js
│   └── validateInput.js
├── models/
│   ├── User.js
│   ├── MonthInPictures.js
│   ├── PressConference.js
│   ├── PressCoverage.js
│   └── PressRelease.js
├── routes/
│   ├── auth.js
│   ├── monthInPictures.js
│   ├── pressConferences.js
│   ├── pressCoverages.js
│   └── pressReleases.js
└── uploads/ (generated at runtime)
```

### Frontend

```
Frontend/
├── vite.config.ts (configured for production)
├── tsconfig.json
├── package.json
├── .env.example
├── .gitignore
├── public/
├── src/
│   ├── main.tsx
│   └── app/
│       ├── App.tsx
│       ├── Root.tsx
│       ├── routes.tsx
│       ├── components/
│       ├── contexts/
│       ├── pages/
│       └── styles/
└── dist/ (generated on build)
```

## API Endpoints Reference

### Public Endpoints

- `GET /api/month-in-pictures` - List all flipbooks
- `GET /api/press-conferences` - List conferences
- `GET /api/press-coverages` - List coverages
- `GET /api/press-releases` - List releases
- `GET /api/press-releases/:id` - Get release details
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password

### Protected Endpoints (require Bearer token)

- `POST /api/month-in-pictures` - Upload new flipbook
- `PUT /api/month-in-pictures/:id` - Update flipbook
- `DELETE /api/month-in-pictures/:id` - Delete flipbook
- `POST /api/press-conferences` - Create conference
- `PUT /api/press-conferences/:id` - Update conference
- `DELETE /api/press-conferences/:id` - Delete conference
- Similar patterns for coverages and releases

## Database

- [ ] MongoDB Atlas cluster created and configured
- [ ] Connection string saved in `.env` file
- [ ] Database backups configured
- [ ] User collections created with proper schemas
- [ ] Indexes created for better performance

## Deployment Steps

### Backend Deployment (Node.js hosting)

1. Set environment variables (`.env` file)
2. Run `npm install` to install dependencies
3. Run `npm start` to start the server
4. Verify server is running on the configured PORT
5. Monitor logs for errors

### Frontend Deployment (Static hosting)

1. Set environment variables (`.env` file with `VITE_API_URL`)
2. Run `npm run build` to create production build
3. Deploy contents of `dist/` directory to static hosting
4. Configure reverse proxy/CDN if needed
5. Set up SSL certificate for HTTPS

## Monitoring & Maintenance

- [ ] Error tracking set up (e.g., Sentry)
- [ ] Server logs monitored
- [ ] Performance metrics tracked
- [ ] Database backups automated
- [ ] Updates to dependencies scheduled
- [ ] Security patches applied promptly

## Post-Deployment

- [ ] Test all API endpoints with curl/Postman
- [ ] Verify file uploads work correctly
- [ ] Test authentication flow (signup, login, logout)
- [ ] Test protected routes return 401 when unauthenticated
- [ ] Verify CORS allows only production domain
- [ ] Monitor server for 24+ hours after deployment

---

**Last Updated**: April 2026
**Version**: 1.0.0

## Troubleshooting

### MongoDB Connection Issues

- Verify connection string is correct
- Check IP whitelist in MongoDB Atlas
- Confirm credentials are correct

### File Upload Issues

- Verify `uploads/` directory has write permissions
- Check file size limits match config
- Ensure MIME type validation is working

### CORS Issues

- Verify `CORS_ORIGIN` matches frontend domain exactly
- Check that frontend is using correct API URL
- Clear browser cache if issues persist

### JWT Issues

- Ensure `JWT_SECRET` is strong and consistent
- Verify token expiry is set appropriately
- Check token is being sent in Authorization header
