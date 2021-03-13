// Useful for generating some keys
export const generateKey = ()=>{
    return (new Date).getTime().toString().concat(Math.floor(Math.random()*10000).toString());
};

// Descending sorting return
export const descSortReturn = (a, b)=>{
    return a < b? 1:-1;
};
// Ascending sorting return
export const ascSortReturn = (a, b)=>{
    return a > b? 1:-1;
};

// Does exactly what the title says
export const getTransitionDurationInMs = (el) =>{
    let duration = window.getComputedStyle(el).transitionDuration;
    let durationFloat = 0;
    if(typeof duration === 'string'){
        durationFloat = parseFloat(duration);
        if(duration.indexOf('ms') === -1 && duration.indexOf('s') !== -1){
            durationFloat *= 1000;
        }
    }
    return durationFloat;
}

// Formats bytes with size string
export const formatFileSize = (bytes) =>{
    let prefixes = [
        'b',
        'kb',
        'mb',
        'gb',
        'tb',
    ];

    let multiplier = 1024;
    let currentPrefix = 0;
    let size = bytes;
    let precision = 2;
    while (bytes > multiplier && prefixes[currentPrefix] !== 'tb'){
        bytes /=multiplier;
        size = bytes;
        currentPrefix++;
    }
    return `${Math.round(size*Math.pow(10, precision))/Math.pow(10, precision)} ${prefixes[currentPrefix]}`;
}