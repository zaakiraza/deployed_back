const Joi = require("joi");
const BaseValidator = require("./BaseValidator.js");


class UserValidator extends BaseValidator {
  validateRegisterUser = (user) => {
    const schema = Joi.object().keys({
      email: Joi.string().email().required(),
      roleName: Joi.string().valid("Student", "Instructor").required(),
      password: Joi.string().min(6).required(),
      username: Joi.string().min(3).optional(),
      phone: Joi.string().min(11).max(14).optional(),
      rememberMe: Joi.boolean().required(),
    });

    return this.validate(schema, user);
  };

  validateLoginUser = (user) => {
    const schema = Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      rememberMe: Joi.boolean().required(),
    });

    return this.validate(schema, user);
  };

  validateUpdateProfile = (data) => {
    const schema = Joi.object().keys({
      firstName: Joi.string().min(1).max(255).optional(),
      lastName: Joi.string().min(1).max(255).optional(),
      username: Joi.string().min(3).max(255).optional(),
      dob: Joi.date().optional().allow(null),
      gender: Joi.string().optional().allow(null, ''),
      imageUrl: Joi.string().uri().optional().allow(null, ''),
      qualification: Joi.string().optional().allow(null, ''),
      designation: Joi.string().optional().allow(null, ''),
      youAre: Joi.string().max(15).optional().allow(null, ''),
      educationalInfo: Joi.array().items(
        Joi.object({
          id: Joi.number().integer().optional(),
          className: Joi.string().optional(),
          institutionType: Joi.string().optional(),
          institutionName: Joi.string().optional(),
          boardSystem: Joi.string().optional(),
          passingYear: Joi.number().integer().optional(),
          isCurrentEducation: Joi.boolean().optional()
        })
      ).optional(),
      courses: Joi.array().items(
        Joi.object({
          id: Joi.number().integer().optional(),
          courseName: Joi.string().optional(),
          institutionName: Joi.string().optional(),
          startDate: Joi.date().optional(),
          endDate: Joi.date().optional().allow(null),
          certificateUrl: Joi.string().uri().optional().allow(null, ''),
          isCompleted: Joi.boolean().optional()
        })
      ).optional()
    });

    return this.validate(schema, data);
  };
}

module.exports = new UserValidator();
