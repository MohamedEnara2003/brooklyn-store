const { default: mongoose } = require("mongoose")


const apiUrl = "mongodb+srv://mohamedenara2003:FunctionEnara2003@mohamedenara.ozrby.mongodb.net/"

async function dbConnect(){
    try {
    await mongoose.connect(apiUrl ,
    {useUnifedTopology : true , useNewUrlParser:true})
    console.log("database is true");
    } catch (error) {
    console.log(error);
    }
}
export default dbConnect ;