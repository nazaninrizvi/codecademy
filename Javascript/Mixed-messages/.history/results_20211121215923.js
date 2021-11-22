const results = URLSearchParams(window.location.search);

function seasons(){
const season = results.get('seasons');
switch(seasons){
    case 'summer':
        return 'summer';
        break;
    case 'autumn':
        alert('you chose summer');
    case 'winter':
        alert('you chose winter');
    case 'spring': 
        alert('you chose spring');
    default:
        alert('you chose surprise me');
        break;
}
}

const results = getElementIdById('results');
results.innerHTML = ;