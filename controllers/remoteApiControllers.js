const axios = require("axios");

exports.demo = async(req,res) => {
    const url="https://jsonplaceholder.typicode.com/posts"
    try {
       const remoteRes = await axios.get(url);
       console.log("remoteRes",remoteRes);
       res.json(remoteRes.data);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.quote = async(req,res) => {
    const options = {
        method: 'GET',
        url: 'https://quotes15.p.rapidapi.com/quotes/random/',
        headers: {
          'X-RapidAPI-Key': 'f63abdae84msh9e14b195741bdadp17daafjsnd2fde2dfad82',
          'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
      };
      
      try {
          const remoteRes = await axios.request(options);
          
          const quoteAndName={
            quote:remoteRes.data.content,
            author:remoteRes.data.originator.name
          };
          res.json(quoteAndName);
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
    }