// src/errorHandler.js

class ErrorHandler {
  // Method to handle different types of errors
  handle(error) {
    if (error instanceof SyntaxError) {
      console.error('Syntax Error:', error.message);
    } else if (error instanceof TypeError) {
      console.error('Type Error:', error.message);
    } else if (error instanceof RangeError) {
      console.error('Range Error:', error.message);
    } else {
      // Generic error handling
      console.error('An error occurred:', error.message);
    }
    // Log the stack trace for debugging purposes
    console.error(error.stack);
    // Additional error handling logic can be implemented here
    // For example, sending error reports, notifying developers, etc.
  }
}

// Export the ErrorHandler class instance
module.exports = new ErrorHandler();
