// src/queryBuilder.js
const QuantumQuery = require('quantum-query');

class QueryBuilder {
  constructor() {
    // Initialize with an empty query object
    this.query = {};
  }

  // Method to reset the query object
  reset() {
    this.query = {};
    return this;
  }

  // Method to set the type of the query (e.g., 'filter', 'sort')
  setType(type) {
    this.query.type = type;
    return this;
  }

  // Method to add conditions to the query
  setConditions(conditions) {
    if (this.query.type === 'filter' && conditions) {
      this.query.conditions = conditions;
    }
    return this;
  }

  // Method to set the sorting order
  setSortOrder(order) {
    if (this.query.type === 'sort' && order) {
      this.query.order = order;
    }
    return this;
  }

  // Method to set the fields for aggregation
  setAggregate(fields) {
    if (this.query.type === 'aggregate' && fields) {
      this.query.fields = fields;
    }
    return this;
  }

  // Method to build the final query object
  build() {
    if (!this.query.type) {
      throw new Error('Query type must be specified');
    }
    return this.query;
  }
}

// Export the QueryBuilder class
module.exports = new QueryBuilder();
