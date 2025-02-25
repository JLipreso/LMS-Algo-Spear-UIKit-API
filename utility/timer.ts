

export function timerFormatTime(seconds: number) {
    const hours     = Math.floor(seconds / 3600);
    const minutes   = Math.floor((seconds % 3600) / 60);
    const secs      = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

export function timerStartTimer(callback: (response: any) => void, duration: number) {
    let timeLeft = duration;
    const intervalId = setInterval(() => {
        if (timeLeft < 0) {
            clearInterval(intervalId);
            return;
        }

        callback({
            formatted: timerFormatTime(timeLeft), 
            seconds: timeLeft,
            duration: duration,
            percentage: {
                left: ((timeLeft / duration) * 100).toFixed(2),
                used: (100 - (timeLeft / duration) * 100).toFixed(2)
            }
        });
        timeLeft--;
    }, 1000);
    
    return () => clearInterval(intervalId);
}

