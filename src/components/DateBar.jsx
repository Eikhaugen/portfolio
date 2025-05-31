import { format } from 'date-fns';

export default function DateBar({input, currentView}) {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'EEE do yyyy');
    const formattedTime = format(currentDate, 'HH:mm');

    const displayInput = (input !== undefined && input !== null && input !== "") ? String(input) : "-";

    return (
        <div className="w-full flex items-center justify-between p-2">
            <span>{ currentView }</span>
            <span id="channelInput">{displayInput.padStart(3, "-")}</span>
            <span>{formattedDate}</span>
            <span>{formattedTime}</span>
        </div>
    );
}