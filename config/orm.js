const connection = require('./connection.js')

let orm = {
    selectAllCol: function (table, callBack) {
      let queryString = 'SELECT * FROM ??'
      connection.query(queryString, [table], function (err, result) {
        if (err) throw err
        callBack(result)
      });
    },
    insertOne: function (table, col1, value,  callback) {
        let queryString = "INSERT INTO ?? (??) VALUES(" + buildQ(value) + ")"
        connection.query(queryString, [table, col1, value], function (err, result) {
            if(err) throw err
            callback(result)
        })
    },
    updateOne: function (table, col1, value1, col2, value2, callback) {
        console.log(table)
        console.log(col1)
        console.log(value1)
        console.log(col2)
        console.log(value2)
        let queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?"
        connection.query(queryString, [table, col1, value1, col2, value2], function (err, result) {
            if(err) throw err
            callback(result)
        })
    }
}
function buildQ(str) {
    let qStr = []
    for(let i = 0; i < str.length; i++) {
        qStr.push('?')
    }
    return qStr.toString()
}



module.exports = orm