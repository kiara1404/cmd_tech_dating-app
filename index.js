let ejs = require('ejs'),
people = [
    {
    name: "Sanne",
    age:"27",
    place:"Amsterdam",
    bio: "I just started my journey. I work fulltime so I find it hard to workout during the week. I am looking for someone who can hold me accountable and pushes me.",
    },
    {
    name: "Gaby",
    age:"22",
    place:"Alphen aan den Rijn",
    bio: "I have been doing fitness for two years now. I am very motivated and I like to workout 5 days a week. I am looking for someone I can help as I've had a friend who's helped me starting this journey.",
    },
    {
    name: "Tim",
    age:"24",
    place:"Rotterdam",
    bio: "I am a football trainer at Feyenoord. I love to help people improve their overall health. If you'd like to improve your cardio, hit me up!",
     },
     {
    name: "Giordano",
    age:"21",
    place:"Rotterdam",
    bio: "I've tried nummerous times to lose weight but I find it very diffult. I am overweight and I never know what to do in the gym, so often I just leave after 15 minutes on the elliptical. I am looking for some guidance.",
    }
]
function people(req, res) {
    var doc = '<doctype html>'
    var length = people.length;
    var index = -1;
    var person;

    doc += '<title>Fit together</title>'
    doc += '<h1>All the party people</h1>'

    while (++index < length) {
        movie = people[index];
        doc += '<h2><a href="/' + person.id + '"> + person.name + </a></h2>'
    }
}

