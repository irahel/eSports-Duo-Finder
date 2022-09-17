export function convertHourStringToMinutes(hourString: string){
    const [hours, minutes] = hourString.split(':').map(Number);
    const minutesAmount = (hours * 60) + minutes;
    return minutesAmount;    
}

export function convertMinutesToHourString(minutesAmout: number){
    const hours = Math.floor(minutesAmout/60);
    const minutes = minutesAmout % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;    
}