
const cron = require('node-cron')


function returnReminder() {

cron.schedule("*/5,*/7 * * * * *", ()=> {
    console.log(" This runs every 5 seconds");
})

}

module.exports = returnReminder;

