import {DateTime} from 'luxon';

function toUTCDateTime(dateString){
    return DateTime.fromISO(dateString, {zone: 'utc'}).toUTC();
}
function toDdMm(dateString){
    return DateTime.fromISO(dateString).toFormat("HH:mm-dd/MM")
}
function dateRangesOverlap(checkInA, checkOutA, checkInB, checkOutB){
    return checkInA<checkOutB && checkOutA > checkInB;
}
export {toUTCDateTime, dateRangesOverlap, toDdMm}