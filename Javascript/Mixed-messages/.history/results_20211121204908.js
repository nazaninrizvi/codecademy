const results = document.getElementIdById('results')
new URLSearchParams(window.location.search).forEach((value, a)){
    alert(`${type}, ${value}`);
}