# Inventory Management System

A full-stack web application for managing inventory with categories and items. Built with Node.js, Express, PostgreSQL, and EJS.

## Features

- **Categories Management**: Create, read, update, and delete product categories
- **Items Management**: Manage inventory items with details like name, description, quantity, price, and category
- **Full CRUD Operations**: Complete Create, Read, Update, Delete functionality for both categories and items
- **Responsive Design**: Clean and user-friendly interface

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Template Engine**: EJS
- **Styling**: Custom CSS
- **Method Override**: For PUT/DELETE requests

## Project Structure

```
inventory-project/
├── config/
│   └── db/
│       ├── pool.js          # Database connection
│       ├── queries.js       # Database queries
│       └── populatedb.js    # Database seeding
├── controllers/
│   ├── categoriesController.js
│   └── itemsController.js
├── routes/
│   ├── categories.js
│   └── items.js
├── views/
│   ├── categories/          # Category views
│   ├── items/              # Item views
│   ├── partials/           # Header and footer
│   └── index.ejs           # Home page
├── public/                 # Static files
├── .env                   # Environment variables
└── app.js                 # Main application file
```

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HaniTermos/simple-CRUD-Inventory-project.git
   cd simple-CRUD-Inventory-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up PostgreSQL database**
   - Create a database named `inventory_manager`
   - Update the `.env` file with your database credentials

4. **Environment Variables**
   Create a `.env` file with:
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=inventory_manager
   DB_USER=your_username
   DB_PASSWORD=your_password
   PORT=3000
   ```

5. **Initialize the database**
   ```bash
   node config/db/populatedb.js
   ```

6. **Start the application**
   ```bash
   npm start
   ```

7. **Access the application**
   Open http://localhost:3000 in your browser

## Usage

- **Home Page**: Navigate to categories or items
- **Categories**: View, create, edit, and delete product categories
- **Items**: Manage inventory items with full details
- **Relationships**: Items are linked to categories for organized inventory management

## API Routes

### Categories
- `GET /categories` - List all categories
- `GET /categories/new` - Create category form
- `POST /categories` - Create new category
- `GET /categories/:id/edit` - Edit category form
- `POST /categories/:id` - Update category
- `POST /categories/:id/delete` - Delete category

### Items
- `GET /items` - List all items
- `GET /items/new` - Create item form
- `POST /items` - Create new item
- `GET /items/:id/edit` - Edit item form
- `POST /items/:id` - Update item
- `POST /items/:id/delete` - Delete item

## Database Schema

### Categories Table
- `id` (SERIAL PRIMARY KEY)
- `name` (VARCHAR(100) NOT NULL UNIQUE)
- `created_at` (TIMESTAMP)

### Items Table
- `id` (SERIAL PRIMARY KEY)
- `name` (VARCHAR(200) NOT NULL)
- `description` (TEXT)
- `quantity` (INTEGER DEFAULT 0)
- `price` (DECIMAL(10,2))
- `category_id` (INTEGER REFERENCES categories(id) ON DELETE CASCADE)
- `created_at` (TIMESTAMP)

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
