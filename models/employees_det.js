/* jshint indent: 2 */
module.exports = function (sequelize, DataTypes) {
  const emp = sequelize.define(
    "emp",
    {
      designation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      b_ac_no: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      b_group: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bank_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      c_address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      emp_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      emp_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      f_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      p_address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      p_email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ifsc_code: { type: DataTypes.STRING, allowNull: false },
      dob: { type: DataTypes.STRING, allowNull: false },
      doj: { type: DataTypes.STRING, allowNull: false },
      c_no: { type: DataTypes.INTEGER, allowNull: false },
      m_no: { type: DataTypes.INTEGER, allowNull: false },
      hsc: { type: DataTypes.JSON, allowNull: false },
      s_s_l_c: { type: DataTypes.JSON, allowNull: false },
      a_course: { type: DataTypes.JSON, allowNull: false },
      e_contact: { type: DataTypes.JSON, allowNull: false },
      exp_det: { type: DataTypes.JSON, allowNull: false },
      f_members: { type: DataTypes.JSON, allowNull: false },
      l_known: { type: DataTypes.JSON, allowNull: false },
      nominee: { type: DataTypes.JSON, allowNull: false },
      pg: { type: DataTypes.JSON, allowNull: false },
      ug: { type: DataTypes.JSON, allowNull: false },
      c_person_1: { type: DataTypes.JSON, allowNull: false },
      c_person_2: { type: DataTypes.JSON, allowNull: false },
      id_mark: { type: DataTypes.JSON, allowNull: false },
      s_no: { type: DataTypes.NUMBER, allowNull: false },
    },
    {
      tableName: "employees_det",
    }
  );
  return emp;
};
