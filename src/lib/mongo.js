import mongoose from 'mongoose'

let isConnected = false

export const connectToDataBase = async () => {
  mongoose.set('strictQuery', true)

  if (isConnected) {
    console.log('DB connected already')

    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'blog',
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    isConnected = true
  } catch (error) {
    console.log(error)
  }
}
