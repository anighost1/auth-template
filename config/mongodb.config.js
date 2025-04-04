import mongoose from "mongoose";

const mongoConnect = () => {
    // eslint-disable-next-line no-undef
    mongoose.connect(`${process.env.MONGO_URI}`)
        .then(() => {
            console.log('Database connected successfully')
        })
        .catch((err) => {
            console.log(err)
        })
}

export default mongoConnect