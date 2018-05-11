var bcrypt = require("bcrypt");

module.exports= function(sequelize, DataTypes) {
	var User = sequelize.define("users", {
		firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'First name is required'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Last name is required'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: {
          msg: 'email is required'
        }
      }
    },
		username: {
			type: DataTypes.STRING,
			allowNull: false,
      notEmpty: {
        msg: 'Username is required'
      },
			unique: {
        args: true,
        msg: 'Sorry, that username is taken.',
        fields: [sequelize.fn('lower', sequelize.col('username'))]
      },	
			validate: {
        max: {
          args: [15],
          msg: 'The username you entered is invalid or more than 15 characters.'
        }   
      }		
		},
		password: {
			type: DataTypes.STRING, 
			allowNull: false,
			validate: {
        min: {
          // may be overridden by bcrypt 
          args: [8],
          msg: 'Minimum 8 characters required in last name'
        }   
      }   		
		}
  });
  
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
  }
  
  User.associate = function(models) {
    User.hasMany(models.posts, {
      onDelete: 'CASCADE'
    });
  };
  return User;
};



// =============================================================
// *** Create Comment Model
// =============================================================
var Comment = mongoose.model('Comment', newComment);

// =============================================================
// *** Export the Comment Model
// =============================================================
module.exports = Comment;