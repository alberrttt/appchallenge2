export function getHoursAndMinutesFromFractionalHour(hour:number) {
    const hours = Math.floor(hour);
    const minutes = Math.round((hour - hours) * 60);
    return { hours, minutes };
}