# 🚀 Quick Start Guide - SkyWings Aviation & Travel

## Prerequisites
- Node.js v16 or higher
- npm (comes with Node.js)

## Installation Steps

### 1. Install Dependencies

**Backend:**
```bash
# From the root directory (newAviation)
npm install
```

**Frontend:**
```bash
# Navigate to frontend folder
cd frontend
npm install
```

### 2. Running the Application

**Option A: Run Both Servers Separately**

**Terminal 1 - Backend Server:**
```bash
# From root directory
npm run dev
```
Server will run on: http://localhost:5000

**Terminal 2 - Frontend Development Server:**
```bash
# From frontend directory
cd frontend
npm run dev
```
Frontend will run on: http://localhost:5173

**Option B: Run with PowerShell (Windows)**
```powershell
# Start backend in background
Start-Process powershell -ArgumentList "npm run dev"

# Navigate to frontend and start
cd frontend
npm run dev
```

### 3. Access the Application

Open your browser and navigate to:
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000

## 📁 Project Structure

```
newAviation/
├── frontend/               # React Frontend Application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── data/          # Mock data
│   │   └── index.css      # Global styles
│   └── package.json
├── server.js              # Express Backend
├── package.json           # Backend dependencies
├── .env                   # Environment variables
└── README.md
```

## 🎯 Available Pages

1. **Home** (`/`) - Main landing page with booking forms
2. **Flights** (`/flights`) - Flight search and booking
3. **Hotels** (`/hotels`) - Hotel search with filters
4. **Buses** (`/buses`) - Bus ticket booking
5. **Cabs** (`/cabs`) - Cab booking service
6. **Academy** (`/academy`) - Aviation training courses
7. **About** (`/about`) - Company information
8. **Contact** (`/contact`) - Contact form

## 🔧 Common Commands

**Backend:**
```bash
npm start       # Start production server
npm run dev     # Start development server with auto-reload
```

**Frontend:**
```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
```

## 🐛 Troubleshooting

### Port Already in Use
If port 5000 or 5173 is already in use:

**For Backend:**
Edit `.env` file:
```
PORT=5001
```

**For Frontend:**
Edit `vite.config.js`:
```js
server: {
  port: 3000
}
```

### Module Not Found
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Build Errors
```bash
# Clear cache and rebuild
npm cache clean --force
npm install
npm run build
```

## 📦 Building for Production

**Frontend:**
```bash
cd frontend
npm run build
```
The `dist/` folder will contain the production build.

**Backend:**
Use the server as-is or deploy with services like:
- Heroku
- Railway
- Render
- DigitalOcean

## 🌐 Deployment

**Frontend (Netlify):**
1. Run `npm run build` in frontend folder
2. Deploy the `frontend/dist` folder to Netlify

**Frontend (Vercel):**
1. Connect your GitHub repo
2. Set build command: `cd frontend && npm run build`
3. Set output directory: `frontend/dist`

**Backend (Railway/Render):**
1. Connect your GitHub repo
2. Set start command: `npm start`
3. Add environment variables

## 🎨 Features Implemented

✅ Responsive design (mobile, tablet, desktop)
✅ React Router navigation
✅ Tailwind CSS styling
✅ Modern animations and transitions
✅ Filter functionality for all booking types
✅ Contact and enquiry forms
✅ Mock API with Express backend
✅ Professional aviation theme

## 📞 Support

For issues or questions:
- Email: support@aviationtravel.com
- Phone: +91 1800-123-4567

---

**Enjoy building with SkyWings! ✈️**
