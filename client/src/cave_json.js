// import dotenv from 'dotenv';
//
// dotenv.config();

const caves = {
  // api_key: process.env.REACT_APP_TMDB_API_KEY,
  cave: [
    {
      "id": 1,
      "title": "Cave in the city!",
      "type": "studio",
      "image_path": "../img/cave-dwellings-la-1.jpeg",
      "overview": "In a small town in Pebble. You can reconnect with your dino side!",
      "location": "Boulder City",
      "number_of_guests": 2,
      "number_of_baths": 1,
      "number_of_beds": 1,
      "amenities": "Large outside bathroom",
      "cave_rules": "No Smoking",
      "host_id": 1
    },
    {
      "id": 2,
      "title": "Movin on up",
      "type": "penthouse",
      "image_path": "../img/cave-dwellings-la-2.jpeg",
      "overview": "Reconnect with nature and disconnect from technology on your own private deck surrounded by pristine and untouched nature, you damn dinosaur.",
      "location": "Scavenge Town",
      "number_of_guests": 3,
      "number_of_baths": 2,
      "number_of_beds": 2,
      "amenities": "Spacious lounge area",
      "cave_rules": "No parties or events",
      "host_id": 1
    },
    {
      "id": 3,
      "title": "Ruffing It",
      "type": "camper",
      "image_path": "../img/cave-bedroom.jpg",
      "overview": "Escape civilization to this incredible and peaceful getaway!",
      "location": "Club Park",
      "number_of_guests": 5,
      "number_of_baths": 2,
      "number_of_beds": 1,
      "amenities": "Spacious play area",
      "cave_rules": "No loud music",
      "host_id": 2
    },
    {
      "id": 4,
      "title": "Dingo Dango",
      "type": "camper",
      "image_path": "../img/cave-dwellings-portland-2.jpeg",
      "overview": "The apartment is large and with lots of sunlight.",
      "location": "Fire Hot",
      "number_of_guests": 2,
      "number_of_baths": 1,
      "number_of_beds": 1,
      "amenities": "TV",
      "cave_rules": "Not suitable for pets",
      "host_id": 2
    },
    {
      "id": 5,
      "title": "Farge - What does it mean ??",
      "type": "apartment",
      "image_path": "../img/cave-dwellings-portland-1.jpg",
      "overview": "This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets, or by relaxing in the hot tub surrounded by over 100 Joshua Trees and a starry night sky.",
      "location": "Fire Hot",
      "number_of_guests": 3,
      "number_of_baths": 1,
      "number_of_beds": 2,
      "amenities": "TV",
      "cave_rules": "Not suitable for pets",
      "host_id": 2
    },
    {
      "id": 6,
      "title": "Jungle Dream Airstream",
      "type": "apartment",
      "image_path": "../img/cave-dwellings-seattle-2.jpeg",
      "overview": "Escape upcoming meteor showers...! Have fun with the little ones.",
      "location": "Club Park",
      "number_of_guests": 5,
      "number_of_baths": 1,
      "number_of_beds": 2,
      "amenities": "TV",
      "cave_rules": "Not suitable for pets",
      "host_id": 2
    },
    {
      "id": 7,
      "title": "Urban Oasis",
      "type": "apartment",
      "image_path": "../img/cave-dwellings-seattle-1.jpeg",
      "overview": "The apartment is large and with lots of sunlight and a Free Parking Space Tucked into a lush courtyard.",
      "location": "Fire Hot",
      "number_of_guests": 4,
      "number_of_baths": 2.5,
      "number_of_beds": 2,
      "amenities": "TV",
      "cave_rules": "Not suitable for pets",
      "host_id": 2
    },
    {
      "id": 8,
      "title": "Stylish Garden Cottage",
      "type": "studio",
      "image_path": "../img/cave-dwellings-china-2.jpg",
      "overview": "Small Space, Big Style, Spectacular Location, this cottage in the Prehistoric District is a real gem.",
      "location": "Fish good",
      "number_of_guests": 2,
      "number_of_baths": 1,
      "number_of_beds": 2,
      "amenities": "TV",
      "cave_rules": "Not suitable for pets",
      "host_id": 2
    },
    {
      "id": 9,
      "title": "Muddy Grubbers Paradise",
      "type": "home",
      "image_path": "../img/cave-dwellings-china-1.jpg",
      "overview": "Lovely vintage house with park-like grounds, near the University of Roar. Stay comfortably in the popular Grubbers neighborhood-- known for quiet, tree-lined streets, upscale grocers, shopping, and restaurants. A peaceful retreat in the heart of the city.",
      "location": "Thunder go boom",
      "number_of_guests": 5,
      "number_of_baths": 1,
      "number_of_beds": 1,
      "amenities": "TV",
      "cave_rules": "Not suitable for pets",
      "host_id": 2
    },
    {
      "id": 10,
      "title": "Tip O Mountain",
      "type": "penthouse",
      "image_path": "../img/cave-bedroom.jpg",
      "overview": "The apartment is large and with lots of sunlight. This location has a large bathroom hole.",
      "location": "By the ocean",
      "number_of_guests": 4,
      "number_of_baths": 2,
      "number_of_beds": 2,
      "amenities": "TV",
      "cave_rules": "Not suitable for pets",
      "host_id": 2
    }
  ]
}

export default caves;
