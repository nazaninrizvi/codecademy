const results = new URLSearchParams(window.location.search);

function seasons() {
    const season = results.get('seasons');
    switch(seasons){
        case 'summer':
            return 'you chose summer';
            break;
        case 'autumn':
            return 'you chose autumn';
        case 'winter':
            return 'you chose winter';
        case 'spring': 
            return 'you chose spring';
        default:
            return 'you chose surprise me';
            break;
    }
}

const results = getElementIdById('perfDate');
results.innerHTML = seasons();