# Vineet Backend - NestJS API

Complete backend API for the Client Website Requirement Form application.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (running locally or MongoDB Atlas)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
The `.env` file is already created with default settings:
```env
MONGODB_URI=mongodb://localhost:27017/vineet_form_db
PORT=3001
NODE_ENV=development
```

3. Start MongoDB (if running locally):
```bash
# Windows (if MongoDB is installed as a service)
net start MongoDB

# Or start manually
mongod
```

4. Run the backend server:
```bash
# Development mode with auto-reload
npm run start:dev

# Production mode
npm run start:prod
```

The server will start on `http://localhost:3001`

## 📋 API Endpoints

### Form Submissions

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/form-submissions` | Create new form submission |
| GET | `/api/form-submissions` | Get all form submissions |
| GET | `/api/form-submissions?status=New` | Filter by status |
| GET | `/api/form-submissions/:id` | Get single submission |
| PATCH | `/api/form-submissions/:id` | Update submission |
| PATCH | `/api/form-submissions/:id/status` | Update status |
| PATCH | `/api/form-submissions/:id/assign` | Assign developer |
| PATCH | `/api/form-submissions/:id/progress` | Update progress |
| DELETE | `/api/form-submissions/:id` | Delete submission |
| GET | `/api/form-submissions/stats` | Get dashboard statistics |

## 🗄️ Database Schema

The application uses MongoDB with Mongoose. All form sections are stored in a single collection with flattened field names:

- `section1_*` - Client Information
- `section2_*` - Website Type
- `section3_*` - Project Details
- `section4_*` - Sitemap & Pages
- `section5_*` - Design Preferences
- `section6_*` - Features
- `section7A_*` to `section7I_*` - Specialized sections
- `section8_*` - Technical Requirements
- `section10_*` - Maintenance
- `section11_*` - Milestones
- `section12_*` - Declaration

Admin fields:
- `status` - Project status (New, In Progress, On Hold, Completed, Cancelled)
- `assignedDev` - Assigned developer name
- `progress` - Progress percentage (0-100)
- `adminNotes` - Admin notes

## 🔧 Project Structure

```
vinnet_backend/
├── src/
│   ├── schemas/              # Mongoose schemas
│   │   └── form-submission.schema.ts
│   ├── dto/                  # Data Transfer Objects
│   │   ├── create-form-submission.dto.ts
│   │   └── update-form-submission.dto.ts
│   ├── modules/              # NestJS modules
│   │   ├── form-submissions.module.ts
│   │   ├── form-submissions.controller.ts
│   │   └── form-submissions.service.ts
│   ├── app.module.ts         # Main module
│   └── main.ts               # Entry point
├── .env                      # Environment variables
└── package.json
```

## 🌐 Frontend Integration

The frontend is configured to connect to this backend via:
- Frontend `.env` file: `VITE_API_BASE_URL=http://localhost:3001`
- API service: `src/services/api.js`

## 📝 Features

✅ Complete CRUD operations for form submissions
✅ Status management (New, In Progress, On Hold, Completed, Cancelled)
✅ Developer assignment
✅ Progress tracking
✅ Dashboard statistics
✅ CORS enabled for frontend
✅ Environment-based configuration
✅ Comprehensive schema for all form sections
✅ Timestamps (createdAt, updatedAt) auto-managed

## 🔐 CORS Configuration

CORS is enabled for the following origins:
- `http://localhost:5173` (Vite dev server)
- `http://localhost:3000`
- `http://localhost:5174`

## 🛠️ Development Commands

```bash
# Build the project
npm run build

# Run tests
npm run test

# Run e2e tests
npm run test:e2e

# Lint code
npm run lint
```

## 📊 MongoDB Connection

### Local MongoDB
```env
MONGODB_URI=mongodb://localhost:27017/vineet_form_db
```

### MongoDB Atlas
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/vineet_form_db?retryWrites=true&w=majority
```

## 🎯 Next Steps

1. Start MongoDB
2. Run backend: `npm run start:dev`
3. Run frontend: `npm run dev`
4. Fill out the form and submit
5. Check admin dashboard to see the saved data

## 📞 Support

For any issues or questions, please check the console logs for detailed error messages.
