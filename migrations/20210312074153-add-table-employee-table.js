"use strict";

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      { tableName: "employees_det" },
      {
        id: {
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
        },
        designation: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        b_ac_no: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        b_group: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        bank_name: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        c_address: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        emp_id: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        emp_name: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        f_name: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        p_address: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        p_email: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        ifsc_code: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        dob: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        doj: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        c_no: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        m_no: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        hsc: {
          type: DataTypes.JSON,
          allowNull: true,
        },
        s_s_l_c: {
          type: DataTypes.JSON,
          allowNull: true,
        },
        a_course: {
          type: DataTypes.JSON,
          allowNull: true,
        },
        e_contact: {
          type: DataTypes.JSON,
          allowNull: true,
        },
        exp_det: {
          type: DataTypes.JSON,
          allowNull: true,
        },
        f_members: {
          type: DataTypes.JSON,
          allowNull: true,
        },
        l_known: {
          type: DataTypes.JSON,
          allowNull: true,
        },
        nominee: {
          type: DataTypes.JSON,
          allowNull: true,
        },
        pg: {
          type: DataTypes.JSON,
          allowNull: true,
        },
        ug: {
          type: DataTypes.JSON,
          allowNull: true,
        },
        c_person_1: {
          type: DataTypes.JSON,
          allowNull: true,
        },
        c_person_2: {
          type: DataTypes.JSON,
          allowNull: true,
        },
        id_mark: {
          type: DataTypes.JSON,
          allowNull: true,
        },
        s_no: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        isActive: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true,
          comment: "null",
        },
        createdBy: {
          type: DataTypes.STRING,
          allowNull: true,
          comment: "null",
        },
        updatedBy: {
          type: DataTypes.STRING,
          allowNull: true,
          comment: "null",
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          comment: "null",
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          comment: "null",
        },
      }
    );
  },

  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable({
      tableName: "employees_det",
    });
  },
};
