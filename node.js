<html>
<head>
<script type="text/javascript">
var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)
</script>
</head>
<body>

</body>
</html>
