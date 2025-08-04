const BaseRepository = require("./BaseRepo");
const db = require("../models/index.js");

class EnrollmentRepo extends BaseRepository {
  model;
  constructor() {
    super(db.Enrollment);
    this.model = db.Enrollment;
  }

  async createEnrollment(enrollment) {
    return this.create(enrollment);
  }

  async findEnrollments(customQuery = null) {
    return this.findAll(customQuery);
  }

  async findEnrollment(customQuery) {
    return this.findOne(customQuery);
  }

  async updateEnrollment(data, query) {
    return this.update(data, query);
  }

  async deleteEnrollment(query) {
    return this.delete(query);
  }

  async count(whereClause = {}) {
    return this.model.count({ where: whereClause });
  }

  async getEnrollmentsByStudent(studentId, options = {}) {
    const query = {
      where: { studentId },
      ...options
    };
    return this.findAll(query);
  }

  async getEnrollmentsBySubcategory(subcategoryId, options = {}) {
    const query = {
      where: { subcategoryId },
      ...options
    };
    return this.findAll(query);
  }
}

module.exports = new EnrollmentRepo(); 