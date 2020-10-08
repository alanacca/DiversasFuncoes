function convertRGB(a){
<<<<<<< HEAD
    r = a.slice(1,3);
    g = a.slice(3,5);
    b = a.slice(5);
    
    return [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)]; 
}

function showString(a){
    return "("+ a[0] + "," + a[1] + ',' + a[2] + ")";
}
