// Grab values from the submitted form in the URL
const results = new URLSearchParams(window.location.search);

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
'design coffee mugs'];

//summer
const SumNoMorn = ['chill on the beach', 'feed ducks in the park', 'play mini golf'];
const SumNoNight = ['take a dance class', 'go to a ghost tour', 'go to a funfair'];
const SumYesMorn = ['fruit picking', 'theme park', 'ice cream parlour'];
const SumYesNight = ['go to a sports event', 'go to a drive-in movie', 
'host a murder mystery party'];

//autumn
const AutNoMorn = ['go rockclimbing', 'go to a botanical garden', 'visit the zoo'];
const AutNoNight = ['watch a live music gig', 'visit a rooftop bar', 
'Explore a new city'];
const AutYesMorn = ['afternoon tea', 'visit an aquarium', 'go paintballing'];
const AutYesNight = ['go to an arcade', 'go bowling', 
'attend a cocktail making/cooking class'];

const season = results.get(`seasons`);
const time = results.get('time');
const group = results.get('group');

let selectedCategory;

switch(season){
    case 'winter':
        if(time === 'day'{
            if(group === 'no'){
                selectedCategory = WinNoMorn;
            }else{
                selectedCategory = WinYesMorn;
            }
        }else{
            if(group === 'no'){
                selectedCategory = WinNoNight;
            }else{
                selectedCategory = WinYesNight;
            }
        }
        break;
    case 'spring':  
        if(time === 'day'{
            if(group === 'no'){
                selectedCategory = SprNoMorn;
            }else{
                selectedCategory = SprYesMorn;
            }
        }else{
            if(group === 'no'){
                selectedCategory = SprNoNight;
            }else{
                selectedCategory = SprYesNight;
            }
        }
        break;
    case 'summer':
        if(time === 'day'{
            if(group === 'no'){
                selectedCategory = SumNoMorn;
            }else{
                selectedCategory = SumYesMorn;
            }
        }else{
            if(group === 'no'){
                selectedCategory = SumNoNight;
            }else{
                selectedCategory = SumYesNight;
            }
        }
        break;    
    case 'autumn':
        if(time === 'day'{
            if(group === 'no'){
                selectedCategory = WinNoMorn;
            }else{
                selectedCategory = WinYesMorn;
            }
        }else{
            if(group === 'no'){
                selectedCategory = WinNoNight;
            }else{
                selectedCategory = WinYesNight;
            }
        }
        break;    
}
