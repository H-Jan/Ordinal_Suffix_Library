
const ordinals: string[] = ["th", "st", "nd", "rd"];

function ordinalSuffix(n: number): string{
    // Make sure number is positive
    n = Math.abs(n);
    // Exception rule of 'teen' numbers ending in th
    const teenth_number: number = n % 100;
    if (teenth_number <= 20 && teenth_number >= 10){
        return 'th'
    }
    const indicator_number: number = n % 10;
    if (indicator_number === 1){
        return 'st'
    } else if (indicator_number === 2){
        return 'nd'
    } else if (indicator_number === 3){
        return 'rd'
    } else {
        return 'th'
    }
}