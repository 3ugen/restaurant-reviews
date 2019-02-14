# _Project_: Restaurant Reviews App
#### _Udacity Front-End Web Developer Nanodegree_
---

## Project Description

A basic app that uses a filter to display restaurants by type and neighbourhood.

## Code dependencies

+ [Python 2](https://www.python.org/downloads/) || [3](https://www.python.org/downloads/) – to serve files.
+ [adactico's](https://github.com/adactio) [basicServiceWorker](https://gist.github.com/adactio/fbaa3a5952774553f5e7)
+ [Google Maps API](https://cloud.google.com/maps-platform/)

## To run the app:

1. In your terminal, navigate into the app folder and:
    + if you have python2 run: `python -m SimpleHTTPServer 8000`
    + if you have paython3 run: `python3 -m http.server 8000`
2. In your borwser open: [http://localhost:8000](http://localhost:8000)

## Project Structure
```
.
├── CODEOWNERS
├── README.md
├── css
│   ├── mobile.css
│   └── styles.css
├── data
│   └── restaurants.json
├── img
│   ├── 1.jpg
│  ... 
│   ├── 10.jpg
│   └── small
│       ├── 1.jpg_1x.jpg
│       ├── 1.jpg_2x.jpg
│      ...
│       ├── 10.jpg_1x.jpg
│       ├── 10.jpg_2x.jpg
├── index.html
├── js
│   ├── dbhelper.js
│   ├── main.js
│   └── restaurant_info.js
├── restaurant.html
└── sw.js
```
