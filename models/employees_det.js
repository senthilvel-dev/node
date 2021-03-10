/* jshint indent: 2 */

const { DataTypes } = require("sequelize")

module.exports = function(sequelize,Datatypes){
const emp = sequelize.define(
    "emp",
    {
        designation:	{ Type: DataTypes.STRING, allowNull:false },
        b_ac_no:	    { Type: DataTypes.STRING, allowNull:false },
        b_group:	    { Type: DataTypes.STRING, allowNull:false },
        bank_name:  	{ Type: DataTypes.STRING, allowNull:false },
        c_address:	    { Type: DataTypes.STRING, allowNull:false },
        emp_id:	        { Type: DataTypes.STRING, allowNull:false },
        emp_name:	    { Type: DataTypes.STRING, allowNull:false },
        f_name:	        { Type: DataTypes.STRING, allowNull:false },
        p_address:	    { Type: DataTypes.STRING, allowNull:false },
        p_email:	    { Type: DataTypes.STRING, allowNull:false },
        ifsc_code:	    { Type: DataTypes.STRING, allowNull:false },
        dob:            {Type: DataTypes.STRING, allowNull:false},
        doj:            {Type: DataTypes.STRING, allowNull:false},
        c_no:           {Type: DataTypes.INTEGER, allowNull:false},
        m_no:           {Type: DataTypes.INTEGER, allowNull:false},
        hsc:	        { Type: DataTypes.JSON, allowNull:false },
        s_s_l_c:	    { Type: DataTypes.JSON, allowNull:false },
        a_course:	    { Type: DataTypes.JSON, allowNull:false },
        e_contact:	    { Type: DataTypes.JSON, allowNull:false },
        exp_det:	    { Type: DataTypes.JSON, allowNull:false },
        f_members:	    { Type: DataTypes.JSON, allowNull:false },
        l_known:	    { Type: DataTypes.JSON, allowNull:false },
        nominee:	    { Type: DataTypes.JSON, allowNull:false },
        pg:	            { Type: DataTypes.JSON, allowNull:false },
        ug:	            { Type: DataTypes.JSON, allowNull:false },
        c_person_1:	    { Type: DataTypes.JSON, allowNull:false },
        c_person_2:	    { Type: DataTypes.JSON, allowNull:false },
        id_mark:	    { Type: DataTypes.JSON, allowNull:false },
        s_no:           { Type: DataTypes.NUMBER, allowNull:false}
    },
    {
        tableName: "employees_det"
    }
);
return emp;
}