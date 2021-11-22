const results = URLSearchParams(window.location.search);

const season = results.get('seasons');
switch(seasons){
    case 'summer':
        break;
    case 'autumn':
        alert('you chose summer');
    case 'winter':
    case 'spring': 
    default:

        break;

    
}