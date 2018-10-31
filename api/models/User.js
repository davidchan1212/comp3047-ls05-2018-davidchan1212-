/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  customToJSON: function () {
    // Return a shallow copy of this record with the password removed.
    return _.omit(this, ['password'])
  },

  attributes: {
    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    username: {
      type: 'string',
      unique: true,
      required: true
    },

    role: {
      type: 'string',
      enum: ['admin', 'tester', 'visitor'],
      defaultsTo: 'visitor'
  },

    supervises: {



      collection: 'Person',
      via: 'worksFor'
    },

  }
};

