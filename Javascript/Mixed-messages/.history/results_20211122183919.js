// Grab values from the submitted form in the URL
const results = new URLSearchParams(window.location.search);

const season = () => {
    results.get(`seasons`);
    
}
const time = results.get('time');
const group = results.get('group');

const SumN
