 const express = require('express');
 const path = require('path');
 const favicon = require('serve-favicon');
 const logger = require('morgan');

 require('dotenv').config();
	
 const app = express();
	
 app.use(logger('dev'));
 app.use(express.json());