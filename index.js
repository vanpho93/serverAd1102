const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
server.listen(process.env.PORT || 3000, () => console.log('server started'));

app.get('/', (req, res) => res.render('home'));

app.get('/admin', (req, res) => {
    res.render('admin', { mang: arrAds });
});

io.on('connection', socket => {
    socket.on('ADMIN_CHANGE_AD', image => {
        console.log(image);
    });
});

//emit, on. on
class Ad {
    constructor(title, image, link) {
        this.title = title;
        this.image = image;
        this.link = link;
    }
}

const arrAds = [
    new Ad('Google', 'google.png', 'google.com'),
    new Ad('Facebook', 'facebook.jpg', 'facebook.com'),
    new Ad('Instagram', 'instagram.png', 'instagram.com'),
    new Ad('Twitter', 'twitter.gif', 'twitter.com')
];
