const results = URLSearchParams(window.location.search);

const season = results.get('seasons');
switch(seasons){
    case 'summer':
        break;
    case 'autumn':
        alert('you chose summer');
    case 'winter':
        alert('you chose winter');
    case 'spring': 
        alert('you chose summer');
    default:
        alert('you chose summer');
        break;

    
}