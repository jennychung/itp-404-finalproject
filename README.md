Hello!

<b> Who is the primary audience? </b>

People who want to be educated in the news about different topics and areas; readers of the New York Times.

<b> What problem are you trying to solve? </b>

Addressing the problem that people are often constrained to only a few topics about only the United States. My project will show headlines from the New York Times through a worldwide perspective regarding different subjects.

<b> How will the project requirements be fulfilled? </b>


<b> API endpoint: </b>

   GET saved digest 
        request: /saved
        response: list of saved
   GET Semantic API
   GET Top Stories API
   GET Google Maps JavaScript API
        HeatmapLayer
        
   POST: today's digest 
        request: /saved
        response: save to list
   POST: like 
        request: /liked/1
        response: like the post
   UPDATE: remove like 
        request: /liked/1
        response: remove like from post
   DELETE: remove item from today's digest
        request: /saved/1
        response: remove from saved list
   

<b> Request payloads </b>

   Semantic API:
        Name: Requests all fields for the concept with concept_type ='nytd_geo' and concept_name='Kansas'.

   http://api.nytimes.com/svc/semantic/v2/concept/name/nytd_geo/Kansas?fields=all&api-key=your-API-key
    
   Top Stories API: (is a request)
   http://api.nytimes.com/svc/topstories/v2/{section}.{response-format}?api-key={your-api-key}
    
<b> Response payloads </b>

   Semantic:
        concept_name (nytd_geo)
        latitude
        longitude
        
   Top Stories API:
        results: [{
            section
            subsection
            title
            abstract
            url
            byline
            published_date
        geo_facet
        multimedia:[{
            url
            }]
        }]

<b> Create at least 2 routes </b>

   Saved Digest
   Home (Map)
   Articles

Loader:
https://codepen.io/joshy/pen/eNvZyN
https://codepen.io/havardob/pen/VjjJey



PROJECT REQUIREMENTS
Tackle the app layout
At least 3 client side routes
At least 1 GET, 1 POST, 1 PUT or PATCH, and 1 DELETE AJAX request
Use of a CSS loading indicator for when AJAX requests are processing
Each page has a unique title using this addon
3 practical acceptance tests
3 practical integration tests
Cleanly formatted code. Don’t just make the code work. Make it also easy to read. This includes proper indentation, consistent casing (camelCase is the JavaScript convention), consistent spacing, and readable variable and function names.
Your project should be styled so that it presents a good user experience and looks organized and professional.
Frontend and API are deployed to Heroku
Travis CI integration with all tests passing
Notifications using Toastr
a success notification when something is successfully updated, deleted, or created
an error notification when an AJAX call fails


API NOTES FOR SELF
Semantic API:
-associate articles with a location (but has to be searched?)
-has longitude & latitude

"geocodes": [
        {
          "geocode_id": 540,
          "concept_id": 26120,
          "concept_name": "Kansas",
          "is_times_tag": 1,
          "concept_status": "Active",
          "geoname_id": 4273857,
          "name": "Kansas",
          "latitude": 38.500289,
          "longitude": -98.500627,
          "elevation": 545,
          "country_code": "US",
          "country_name": "United States"


Top Stories API:
geo_facet

Newswire API:
-recent news -> geo_facet -> convert geo_facet 
