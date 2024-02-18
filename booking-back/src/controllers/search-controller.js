const { findDistinctRoute, findSchedule } = require("../services/search-service");
const { catchError } = require("../utilities/catch-error");

exports.getDistinctRoute = catchError(
    async (req, res, next) => {
        // console.log('123156');
        console.log(req);
        let path = ""
        if (req.path === '/origin') {
            path = "origin"
            const route = await findDistinctRoute(path)
            res.status(200).json({ route })
        } else {
            console.log(req.params.start);
            path = "destination"
            const start = req.params.start
            const route = await findDistinctRoute(path, start)
            res.status(200).json({ route })
        }


    }
)

exports.getSchedule = catchError(
    async (req, res, next) => {
        // console.log(req.body);
        console.log(req.body);
        const { origin, destination, departureDate } = req.body


        console.log(req.body);
        const newDepartureDate = new Date(departureDate)

        console.log(newDepartureDate);

        // departureDate = new Date(departureDate)
        const schedule = await findSchedule(origin, destination, newDepartureDate)
        console.log(schedule);
        res.status(200).json({ schedule })
    }
)