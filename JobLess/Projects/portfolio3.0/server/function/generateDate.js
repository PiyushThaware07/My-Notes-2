function generateDate() {
    try {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Month is zero-indexed, so we add 1
        const day = date.getDate()
        const current_date = `${day}/${month}/${year}`;
        return current_date;
    }
    catch (error) {
        console.log("Error is generating date function");
        return error;
    }
}

module.exports = generateDate;