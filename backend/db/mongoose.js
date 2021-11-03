const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wiz',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

