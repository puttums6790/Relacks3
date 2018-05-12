var Board = require('../../db/models/boards')

module.exports = function (router) {
  router
    .post('/create/board', function (req, res) {
      var body = req.body
      console.log('got here', body)
      return Board.create(body).then(function (board) {
        console.log('Board created successfully')
        return res.status(200).send('Board created successfully')
      })
      .catch(function (err) {
        console.log('err', err)
        return res.status(400).send('something went wrong.')
      })
    })
  router
    .get('/board/list', function (req, res) {
      console.log('getting board/list')
      return Board.find({mapUrl: { $ne: null }}).then(function (boards) {
        console.log('got boards', boards)
        return res.status(200).json(boards)
      })
      .catch(function (err) {
        console.error('error', err)
        return res.status(400).send('something went wrong.')
      })
    })


    router.get('/delete-all', function(req, res){
      console.log('getting board/list')
      return Board.remove({}).then(function (boards) {
        console.log('removed all boards')
        return res.status(200).send('ok')
      })
      .catch(function (err) {
        console.error('error', err)
        return res.status(400).send('something went wrong.')
      })
    })
    
}