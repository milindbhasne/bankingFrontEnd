var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = require('./connection.js')

var customerSchema = new Schema({
 
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  address1: {
    type: String,
    required: true
  },
  address2: {
    type: String,
    required: true
  },
  address3: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  pin: {
    type: Number,
    required: true,
    
  },
  phone: {
    type: Number,
    required: true,
    
  }
}, { collection: 'CustomerDetails' });

let registration_detail = mongoose.model('CustomerDetails', itemSchema);


exports.findAll = (data) => {
  return new Promise((resolve, reject) => {
    registration_detail.find(data)
          .then((res) => {
              return resolve(res)
          })
          .catch((err) => {
              let badResponse = {
                  message: "Data Not Found",
                  error: err
              }
              return reject(badResponse)
          })
  })
}

exports.insertData = (data) => {
  return new Promise((resolve, reject) => {
      var insertData = new registration_detail(data)
      return insertData.save()
          .then((res) => {
              if (res) {
                  return resolve(res)
              } else {
                  let badResponse = {
                      msg: "Data Not Inserted"
                  }
                  return reject(badResponse)
              }
          })
          .catch((err) => {
              let badResponse = {
                  msg: "Data Not Inserted",
                  error: err
              }
              return reject(badResponse)
          })
  })
}

exports.updateData = (toUpdate, data) => {
  return new Promise((resolve, reject) => {
      let prevData = toUpdate
      let newData = {
          $set: data
      }
      registration_detail.update(prevData, newData, { multi: true, new: true })
          .then((res) => {
              if (res.n) {
                  let response = {
                      msg: "Data Updated"
                  }
                  return resolve(response)
              } else {
                  let badResponse = {
                      msg: "No Such Email Exist",
                  }
                  return reject(badResponse)
              }
          })
          .catch((err) => {
              let badResponse = {
                  msg: "Data Not Updated",
                  error: err
              }
              return reject(badResponse)
          })
  })
}

exports.removeData = (data) => {
  return new Promise((resolve, reject) => {
    registration_detail.remove(data)
          .then((res) => {
              if (res.n) {
                  let response = {
                      msg: "Data Deleted"
                  }
                  return resolve(response)
              } else {
                  let badResponse = {
                      msg: "no such data exist"
                  }
                  return reject(badResponse)
              }
          })
          .catch((err) => {
              let badResponse = {
                  msg: "Data Not Deleted",
                  error: err
              }
              return reject(badResponse)
          })
  })
}