"use strict";
const url =
  "https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d53240e62bmshfe152a8d132bf38p158a60jsnb9af5f9beb16",
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
};

const spotifyFetch = async function () {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
spotifyFetch();
