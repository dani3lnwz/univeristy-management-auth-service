import mongoose from "mongoose";
import config from "./config";
import app from './app'

async function bootstrap() {
    try{
    await mongoose.connect(config.database_url as string);
    console.log(` Database conected success`);

    app.listen(config.port, () => {
        console.log(`Example app listening on port ${config.port}`)
      })

    }catch(err){
        console.log('Failed to connect database', err)
    }
    }

    bootstrap();