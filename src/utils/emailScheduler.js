const cron = require('node-cron');
const sendMail = require('./sendMail');

const mssql = require('mssql');
const config = require('../config/config');

async function checkReturnDatesAndSendEmails() {
    try {
        const sql = await mssql.connect(config);
        if (sql.connected) {
            const request = sql.request();
            const result = await request.execute('CheckReturnDates');

            result.recordset.forEach(async (row) => {
                const { DaysRemaining, MemberEmail } = row;

                if (DaysRemaining >= 0 && DaysRemaining <= 1) {
                    const message = {
                        to: MemberEmail,
                        from: process.env.EMAIL_USER,
                        subject: 'Book Return Reminder',
                        text: 'Please remember to return the borrowed book soon.',
                    };
                    await sendMail(message);
                } else if (DaysRemaining < 0) {
                    const message = {
                        to: MemberEmail,
                        from: process.env.EMAIL_USER,
                        subject: 'Book Return Overdue',
                        text: 'Your book return is overdue. Please return it as soon as possible to avoid fines.',
                    };
                    await sendMail(message);
                }
            });
        }
    } catch (error) {
        console.log(error);
    }
}


cron.schedule('0 9 * * *', () => {
    checkReturnDatesAndSendEmails();
});
