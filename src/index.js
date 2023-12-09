// src/index.js
const QuantumQuery = require('quantum-query');
const queryBuilder = require('./queryBuilder');
const errorHandler = require('./errorHandler');

// Sample data to demonstrate the usage of QuantumQuery
const sampleData = [
  { id: 1, name: 'Alice', age: 30, group: 'editor' },
  { id: 2, name: 'Bob', age: 22, group: 'writer' },
  { id: 3, name: 'Charlie', age: 28, group: 'writer' },
  { id: 4, name: 'David', age: 35, group: 'editor' },
  { id: 5, name: 'Eve', age: 40, group: 'editor' }
];

// Initialize QuantumQuery with sample data
const quantumQuery = new QuantumQuery(sampleData);

// Example query using the queryBuilder
function executeSampleQuery() {
  try {
    const query = queryBuilder.build({
      type: 'filter',
      conditions: { group: 'editor' }
    });

    const results = quantumQuery.execute(query);
    console.log('Query Results:', results);
  } catch (error) {
    errorHandler.handle(error);
  }
}

// Execute the sample query
executeSampleQuery();

// Export the QuantumQuery instance for external usage
module.exports = quantumQuery;
