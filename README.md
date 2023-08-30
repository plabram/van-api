# Van API
Do you ever dream of selling your house and travelling the world in a van? This API takes you one step closer by allowing you to manage information about your van collection.

A typical van looks like this:
| `title` | String | "Classic van with roof rack" |
| `model` | String | "Volkswagen Transporter" |
| `description` | String | "A beautiful classic VW van , nearly new. Back seats fold down to make beds. Has luggage rack where you can put your surfboard." |
| `price` | Number | 100 |
| `attributes` | [String] | ["beds" , "luggage rack"] |
| `drive` | String | "manual" |
| `insured` | Boolean | "false" |

### Endpoints:
The base url is: http://localhost:4001/api
* GET all vans and POST new vans: /vans
* GET, PUT or DELETE vans by id: /vans/:id

Whenever a new van is created or updated the date is automatically added in `created` and `lastUpdated`.



