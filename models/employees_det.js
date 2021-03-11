/* jshint indent: 2 */
module.exports = function (sequelize, DataTypes) {
  const employees_det = sequelize.define(
    "employees_det",
    {
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
      ifsc_code: { type: DataTypes.STRING, allowNull: true },
      dob: { type: DataTypes.STRING, allowNull: true },
      doj: { type: DataTypes.STRING, allowNull: true },
      c_no: { type: DataTypes.INTEGER, allowNull: true },
      m_no: { type: DataTypes.INTEGER, allowNull: true },
      hsc: { type: DataTypes.JSON, allowNull: true },
      s_s_l_c: { type: DataTypes.JSON, allowNull: true },
      a_course: { type: DataTypes.JSON, allowNull: true },
      e_contact: { type: DataTypes.JSON, allowNull: true },
      exp_det: { type: DataTypes.JSON, allowNull: true },
      f_members: { type: DataTypes.JSON, allowNull: true },
      l_known: { type: DataTypes.JSON, allowNull: true },
      nominee: { type: DataTypes.JSON, allowNull: true },
      pg: { type: DataTypes.JSON, allowNull: true },
      ug: { type: DataTypes.JSON, allowNull: true },
      c_person_1: { type: DataTypes.JSON, allowNull: true },
      c_person_2: { type: DataTypes.JSON, allowNull: true },
      id_mark: { type: DataTypes.JSON, allowNull: true },
      s_no: { type: DataTypes.NUMBER, allowNull: true },
    },
    {
      tableName: "employees_det",
    }
  );
  return employees_det;
};
