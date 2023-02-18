const PORT = 8000
const axios = require('axios').default
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.listen(PORT, () => console.log('running on port ' + PORT))