function ordinalSuffix(n) {
    // Make sure number is positive
    n = Math.abs(n);
    // Exception rule of 'teen' numbers ending in th
    var teenth_number = n % 100;
    if (teenth_number <= 20 && teenth_number >= 10) {
        return n + 'th';
    }
    var indicator_number = n % 10;
    if (indicator_number === 1) {
        return n + 'st';
    }
    else if (indicator_number === 2) {
        return n + 'nd';
    }
    else if (indicator_number === 3) {
        return n + 'rd';
    }
    else {
        return n + 'th';
    }
}

