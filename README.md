# E-Commerce Product Listing Page

## Project Overview
This project is a modern e-commerce product listing page built using React. The application dynamically fetches product data, allows users to interact through filtering and sorting, and includes personalized features that simulate a modern shopping experience.

## Technologies Used
- **React** for building the user interface
- **JavaScript (ES6+)** for functionality and interactivity
- **CSS** for styling and animations
- **React Hooks** (useState, useEffect) for state management
- **Local Assets** for product images

## Features Implemented
### Mandatory Features:
1. **Product Listing with Image Carousel**
   - Displays products dynamically with images.
   - Allows easy browsing through a list of products.

2. **Filtering & Sorting with Debounced Input**
   - Users can search for products using a search bar.
   - Sorting functionality to arrange products based on price or name.
   
3. **'Recommended for You' Section**
   - Suggests products based on user interactions.

4. **Wishlist Feature**
   - Users can add and remove items from their wishlist.
   - Wishlist persists during the session.

5. **Pagination/Infinite Scroll & Price Range Filter**
   - Displays limited products per view with pagination or infinite scrolling.
   - Filters products based on price range.

6. **Dark Mode Toggle**
   - Users can switch between light and dark mode.

7. **Documentation**
   - This README file serves as documentation.

### Bonus Features:
1. **Fully Functioning Shopping Cart**
   - Users can add items to the cart.
   - Quantity controls and real-time total price calculation.

2. **Enhanced Accessibility**
   - Proper ARIA labels and focus management for better usability.

3. **Smooth Hover Animations for Product Cards**
   - Subtle scaling and shadow effects on hover.

## Implementation Details
- **State Management:**
  - `useState` is used for managing wishlist, search term, dark mode, and filtered products.
  - `useEffect` is used for filtering products based on the search term.

- **Dynamic Product Rendering:**
  - Products are mapped dynamically using the `.map()` function.
  
- **Event Handling:**
  - Functions handle user interactions like adding/removing items from the wishlist.
  
- **Styling & Animations:**
  - CSS animations and transitions for a smooth user experience.

## How to Run the Project
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd ecommerce-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the application:
   ```sh
   npm start
   ```

This will launch the application in the browser at `http://localhost:3000/`.

## Future Enhancements
- Integration with an external API for product data.
- Authentication system for users.
- Checkout and payment gateway integration.
- More advanced filtering and sorting options.

