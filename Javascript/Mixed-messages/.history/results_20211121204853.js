const results = document.getElementIdById('results')
new URLSearchParams(window.location.search).forEach((value, type)){
    alert(`${type}, ${value}`);
}