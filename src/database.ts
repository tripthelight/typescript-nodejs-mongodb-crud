import mongoose from 'mongoose';

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost/ts-app-tutorial');
    console.log('>>>>> database connected :)');
    
  } catch (error: any) {
    console.log('mongodb connect error : ', error);
  }
}

export default connect;
