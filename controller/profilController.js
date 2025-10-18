const axios = require("axios");

exports.getProfil = async (req, res) => {
  try {
    const response = await axios.get("https://catfact.ninja/fact");
    const catfact = response.data.fact;

    const result = {
      status: "success",
      user: {
        email: "heshimajulien.official@gmail.com",
        name: "Heshima Lunyungu Julien",
        stack: "Node.js/Express",
      },
      timestamp : new Date().toISOString(),
      fact:catfact
    };
    res.status(200).json(result)
  } catch (error) {
    console.log("Error fetching cat fact", error.message);

    res.status(500).json({
        status :"error",
        message:"Failed to fetch cat fact",
        timestamp:new Date().toISOString()
    })
    
  }
};
