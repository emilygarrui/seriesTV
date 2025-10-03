# SeriesTV App

## Description

SeriesTV is a web application built with **Ionic and Angular** that allows users to manage their personal TV series collection.  
The app provides the following features:

- View all registered series.
- Add new series with title and genre.
- Edit existing series.
- Delete series.

The user interface follows a **consistent dark theme**, with centered forms and clean, readable lists.

---

## Technologies Used

- **Frontend:** Ionic, Angular, HTML, SCSS  
- **Backend:** Node.js + Express (or your backend of choice)  
- **HTTP Client:** Angular HttpClient  
- **Version Control:** Git / GitHub  

---

## Installation and Running

1. Clone the repository:

```bash
git clone https://github.com/emilygarrui/seriesTV.git
```

2. Install all dependencies:

```bash
npm install
```

3. Make sure your backend server is running at http://localhost:8080. (Adjust the URL in `serie-service.ts` if needed)

4. Start the app
``` bash
ionic serve
```

## Project Structure
``` bash
src/
├─ app/
│ ├─ home/
│ ├─ my-series/
│ ├─ serie-form/
│ ├─ services/
│ │ └─ serie-service.ts
│ └─ app.module.ts
```

- `home/` → Welcome page with description and button to view all series.  
- `my-series/` → Page listing all series, with buttons to edit or delete each one.  
- `serie-form/` → Page to create or update a series.  
- `services/` → Contains `serie-service.ts` for API calls.  

---

## API Endpoints (Postman)

You can test the API endpoints using **Postman**:

[SeriesTV Postman Collection](https://documenter.getpostman.com/view/48969121/2sB3QGuBbg)

> Make sure the backend server is running before testing the endpoints.

---

## Usage

1. Open the home page.  
2. Click **"Show all series"** to navigate to the list of series.  
3. Use the **Add Series** button to create a new series.  
4. Use **Edit** and **Delete** buttons for managing existing series.  

---

## Author

**Emily García Ruiz**
- GitHub: [https://github.com/emilygarrui]
