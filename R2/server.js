import e from 'express';
import axios from 'axios';
import cors from 'cors';  


const app = e();
app.use(cors());

const port = 3000;
app.get('/', async (req, res) => {
  try {
    
    const response = await axios.get('https://mocki.io/v1/5d7cfd64-59e3-4428-b415-0d2d050c87c9');
    console.log(response.data.msg);

    
    res.json({
      data: {
       msg:response.data,
      message: 'You need to download the image and decode the codes '
      }
    });  
  } catch (error) {
    console.error('Error occurred while fetching data:', error.message);
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});