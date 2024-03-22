let age = 19;
const main = () => {
    try {
        if (age > 18) {
            console.log("Try Block");
            return
        }
        else {
            throw new Error("Age is less than 18")
        }
    }
    catch (error) {
        console.log("Error Block");
        // console.log(p); // if catch ke andhar bhi error hai toh finally fir bhi print hoga
    }
    finally {
        console.log("Finally Block");
    }
}
main()
console.log("End Program");