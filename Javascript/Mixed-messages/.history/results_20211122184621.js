// Grab values from the submitted form in the URL
const results = new URLSearchParams(window.location.search);

const season = () => {
    results.get(`seasons`);
    
}
const time = results.get('time');
const group = results.get('group');

//winter
const WinNoMorn = ['hike', 'get hot chocolate at your local chocolate shop', 
'volunteer at a soup kitchen'];
const WinNoNight = ['go to a Christmas Market', 'go ice skating', 
'go on a tour of the Christmas lights in your city'];
const WinYesMorn = ['visit another city', 'watch an Oscar-nominated blockbuster', 
'go to an exhibition'];
const WinYesNight = ['host a game night', 'have a pot luck dinner', 
'everyone creates a knitted item for another member' ];

//spring
const SprNoMorn = ['bike ride', 'farmers market', 'couples massage'];
const SprNoNight = ['enjoy dinner at a fancy restaurant', 'go to a food festival', 
'go camping'];
const SprYesMorn = ['picnic', 'local farm', 'go for brunch'];
const SprYesNight = ['attend a quiz night', 'attend an escape room', 
    design coffee mugs]   
