# Assembly Weather

# Usage

- unzip into folder.
- cd to that folder.
- `cp .env.example .env`
- `npm install`
- `npm run dev`
- In another terminal
- `curl localhost:3300/api/weather`

To run tests without coverage

- `npm run test`

To run tests with coverage

- `npm run coverage`

# Notes

The full end-to-end requirements have NOT beeing implemented.
I don't have an ACCESS_KEY to both of the Weather Services and I had asked for these from Assembly.
Completing would take about 1hr when I have these keys. Please see shared/providers/weather-providers.js 
line 26. 

# Design

I have used a Domain Driven Design (DDD) approach.

You can see the DDD in the structuring of the Business functionality into the folder
'business' where the features of the business are captured as Models in the 'model'
folder.

The reason for this is because in a DDD approach the implementation of the 
Business and the delivery of that Business are separated. 

While the Weather API will be delivered via HTTP/Express in this instance it is  
possible the Weather functionality may be required via a different interface, like a
batch process or part of another Business Model/process and it would not be good if
this was tied to one way of invoking it.

I have tried to inject dependencies wherever possible, to avoid hard coded values.
See config/config.js as an example and its use in controllers/index.js. 
Eg: `const config = configs[configs.env];`

I have tried to keep code isolated with a single responsibility (SRP).

I have also wrapped some functionality so that it can be easily changed in one place
based on environment and needs. eg: shared/logger.js

I have tried to keep the mocking / stubbing to a minimum - choosing to not use a 
library (`const myMock = jest.fn();`) where not necessary to keep code easier to understand.

With more time there is a great many things I would do. We should discuss.
