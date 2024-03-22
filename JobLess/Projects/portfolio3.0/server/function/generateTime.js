function generateTime() {
    try {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const time = `${hours}:${minutes}:${seconds}`
        return time;
    }
    catch (error) {
        console.log("Error is generating date function");
        return error;
    }
}

module.exports = generateTime;