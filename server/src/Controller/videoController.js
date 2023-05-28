const Video = require('../Model/video');

const add = async (req, res) => {
    try {
      const video = await Video.findOne({ url:req.body.url });
      if(!video){
  
        const newVideo = new Video({
         url:req.body.url 
        });

        await newVideo.save();
        res.status(201).json({ message: 'successfully created' });
      }
      if(video){
        res.status(500).json({ message: ' This url already exists' });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };


  const find = async (req, res) => {
    try {
      const video = await Video.find();
      res.status(201).json({ data: video });
     
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };



 module.exports = {
  add,
  find
 }