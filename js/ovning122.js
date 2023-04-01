function convertDays() {
    const days = parseInt(document.getElementById("days-input").value);
    const today = new Date();
    const targetDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + days);
    const diffInMs = targetDate - today;
    const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));
    const years = Math.floor(diffInDays / 365);
    const remainingDays = diffInDays % 365;
    const months = Math.floor(remainingDays / 30);
    const remainingDaysInMonth = remainingDays % 30;
    document.getElementById("result").innerHTML = `Years: ${years}, Months: ${months}, Days: ${remainingDaysInMonth}`;
}